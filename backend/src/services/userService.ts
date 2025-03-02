import IUserDTO from "./interfaces/dto/IUserDTO";
import IUserAdminDTO from "./interfaces/dto/IUserAdminDTO";
import IUserModel from "./interfaces/models/IUserModel";
import { HttpException, ErrorType } from "../utils/error/errorType";
import { Types } from "mongoose";
import IUserRepository from "../repositories/interfaces/IUserRepository";
import IUserService from "./interfaces/IUserService";
import Mapper from "../utils/mappers";
import { verifyPassword, hashPassword } from "../utils/authentication/passwordHandle";
import { generateToken } from "../utils/authentication/token"
import { verifyPermission } from "../utils/authorization/permissions";


export class UserService implements IUserService {
    constructor(private readonly userRepository: IUserRepository) {}

    async validateObjectId(id: string): Promise<void> {
        if (!Types.ObjectId.isValid(id)) {
            throw HttpException(ErrorType.BAD_REQUEST, "Invalid user id");
        }
    }
    async validateUserExists(email?: string): Promise<void> {
        if (email && await this.userRepository.findUserByEmail(email)) {
            throw HttpException(ErrorType.CONFLICT, "User with this email already exists");
        }
    }
    
    async findAllUsers(user: IUserModel): Promise<IUserAdminDTO[]> {
        if (!user.userLogged || !await verifyPermission(user.userLogged.permissions, 'admin')) {
            throw HttpException(ErrorType.FORBIDDEN, "Access denied");
        }
        try {
            const users = await this.userRepository.findAllUsers();
            if (!users || users.length === 0) {
                throw HttpException(ErrorType.NOT_FOUND, "No users found");
            }
            return await Promise.all(users.map(user => Mapper.toUserAdminDTO(user)));
        } catch (error) {
            throw HttpException(ErrorType.INTERNAL_SERVER, "Failed to fetch users");
        }
    }

    async findUserById(id: string): Promise<IUserDTO> {
        await this.validateObjectId(id);
        try {
            const user = await this.userRepository.findUserById(id);
            if (!user) {
            throw HttpException(ErrorType.NOT_FOUND, "User not found");
            }
            const response = await Mapper.toUserDTO(user);
            return response;
        } catch (error) {
            throw HttpException(ErrorType.INTERNAL_SERVER, "Failed to fetch user");
        }
    }

    async createUser(user: IUserModel): Promise<IUserDTO> {
        await this.validateUserExists(user.reqBody.email);
        try {
            if (!user.reqBody.permissions || user.reqBody.permissions.length === 0) {
                user.reqBody.permissions = ['read'];
            }
            
            user.reqBody.password = await hashPassword(user.reqBody.password);
            const userEntity = await Mapper.toUserEntity(user);
            console.log(userEntity)
            const createdUser = await this.userRepository.createUser(userEntity);
            
            if (!createdUser) {
                throw HttpException(ErrorType.INTERNAL_SERVER, "Failed to create user");
            }
            const response = await Mapper.toUserDTO(createdUser);
            return response;
        } catch (error: any) {
            // Improved error handling
            const message = error.message || "Failed to create user";
            throw HttpException(
                error.type || ErrorType.BAD_REQUEST,
                message
            );
        }
    }

    async updateUser(id: string, user: IUserModel): Promise<IUserDTO> {
        await this.validateObjectId(id);
        if (!user.userLogged) {
            throw HttpException(ErrorType.UNAUTHORIZED, "User not logged in");
        }

        if (id !== user.userLogged.id || !await verifyPermission(user.userLogged.permissions, 'write')) {
            throw HttpException(ErrorType.UNAUTHORIZED, "id incorrect or Permissions invalid");
        }

        if (user.userLogged.lastName !== user.reqBody.lastName) {
            await this.validateUserExists(user.reqBody.email !== user.userLogged.email ? user.reqBody.email : undefined);
        }

        if (user.reqBody.password) {
            user.reqBody.password = await hashPassword(user.reqBody.password);
        }

        try {
            const userEntity = await Mapper.toUserEntity(user);
            const updatedUser = await this.userRepository.updateUser(id, userEntity);
            if (!updatedUser) {
                throw HttpException(ErrorType.NOT_FOUND, "User not found");
            }
            //await this.userLogout(user.userLogged.id);
            //const newToken = await this.userLogin(updatedUser.username, updatedUser.password);
            const response = await Mapper.toUserDTO(updatedUser);
            return response;
            //return { ...response, token: newToken };
        } catch (error: any) {
            throw HttpException(ErrorType.BAD_REQUEST, "Failed to update user");
        }
    }

    async deleteUser(id: string, user: IUserModel): Promise<IUserDTO> {
        try {
            // Check if user is logged in and has admin permissions
            if (!user.userLogged) {
                throw HttpException(ErrorType.UNAUTHORIZED, "User not logged in");
            }
            
            if (!await verifyPermission(user.userLogged.permissions, "admin")){
                throw HttpException(ErrorType.FORBIDDEN, "Access denied - Admin permission required");
            }

            // Validate the ID format
            await this.validateObjectId(id);

            // Check if trying to delete admin
            const admin = await this.findUserByEmail('admin@example.com');
            if (id === admin.id){
                throw HttpException(ErrorType.FORBIDDEN, "Admin user cannot be deleted");
            }

            // Try to delete the user
            const deletedUser = await this.userRepository.deleteUser(id);
            if (!deletedUser) {
                throw HttpException(ErrorType.NOT_FOUND, "User not found");
            }

            return await Mapper.toUserDTO(deletedUser);
        } catch (error: any) {
            console.error('Delete user service error:', error);
            throw HttpException(
                error.type || ErrorType.BAD_REQUEST,
                error.message || "Failed to delete user"
            );
        }
    }
    
    async findUserByEmail(email: string): Promise<IUserDTO> {
        if (!email || typeof email !== 'string') {
            throw HttpException(ErrorType.BAD_REQUEST, "Invalid email");
        }
        const user = await this.userRepository.findUserByEmail(email);
        if (!user) {
            throw HttpException(ErrorType.NOT_FOUND, "User not found");
        }
        const response = await Mapper.toUserDTO(user);
        return response;
    }

    async findUserByUsername(username: string): Promise<IUserDTO> {
        if (!username || typeof username !== 'string') {
            throw HttpException(ErrorType.BAD_REQUEST, "Invalid username");
        }
        const user = await this.userRepository.findUserByUsername(username);
        if (!user) {
            throw HttpException(ErrorType.NOT_FOUND, "User not found");
        }
        const response = await Mapper.toUserDTO(user);
        return response;
    }

    async findUsersByCountry(country: string): Promise<IUserDTO[]> {
        if (!country || typeof country !== 'string') {
            throw HttpException(ErrorType.BAD_REQUEST, "Invalid country");
        }
        const users = await this.userRepository.findUserByCountry(country);
        if (!users || users.length === 0) {
            throw HttpException(ErrorType.NOT_FOUND, "No users found for the given country");
        }
        const response = await Promise.all(users.map( user => Mapper.toUserDTO(user)));
        return response;
    }

    async findUsersByGender(gender: string): Promise<IUserDTO[]> {
        if (!gender || typeof gender !== 'string') {
            throw HttpException(ErrorType.BAD_REQUEST, "Invalid gender");
        }
        const users = await this.userRepository.findUserByGender(gender);
        if (!users || users.length === 0) {
            throw HttpException(ErrorType.NOT_FOUND, "No users found for the given gender");
        }
        const response = await Promise.all(users.map(user => Mapper.toUserDTO(user)));
        return response;
    }

    async userLogin(email: string, password: string): Promise<{token: string; userDTO: IUserDTO} | undefined> {
        const user = await this.userRepository.findUserByEmail(email);
        if (user && await verifyPassword(password, user.password)){
            const userDTO = await Mapper.toUserDTO(user);
            const token = await generateToken(userDTO);
            if (token){
                return {token, userDTO};
            }
        } else {
            throw HttpException("UNAUTHORIZED", 'Invalid credentials' );
        }
    }

    async userLogout(id: string): Promise<boolean> {
        return true;
    }
}

export default UserService;