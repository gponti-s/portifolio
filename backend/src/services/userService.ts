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
    async validateUserExists(username: string, email?: string): Promise<void> {
        if (email && await this.userRepository.findUserByEmail(email)) {
            throw HttpException(ErrorType.CONFLICT, "User with this email already exists");
        }
        if (await this.userRepository.findUserByUsername(username)) {
            throw HttpException(ErrorType.CONFLICT, "User with this username already exists");
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
        await this.validateUserExists(user.reqBody.username, user.reqBody.email);
        try {
            user.reqBody.password = await hashPassword(user.reqBody.password)
            const userEntity = await Mapper.toUserEntity(user);
            const createdUser = await this.userRepository.createUser(userEntity);
            if (!createdUser) {
                throw HttpException(ErrorType.INTERNAL_SERVER, "Failed to create user");
            }
            const response = await Mapper.toUserDTO(createdUser);
            return response;
        } catch (error: any) {
            throw HttpException(ErrorType.BAD_REQUEST, "Failed to create user");
        }
    }

    async updateUser(id: string, user: IUserModel): Promise<IUserDTO> {
        await this.validateObjectId(id);
        if (user.userLogged){
            if (id !== user.userLogged.id || !await verifyPermission(user.userLogged.permissions, 'write')) {
                throw HttpException(ErrorType.UNAUTHORIZED, "id incorrect or Permissions invalid");
            }
            
            if (user.userLogged.username !== user.reqBody.username){
                await this.validateUserExists(user.reqBody.username, 
                    user.reqBody.email === user.userLogged.email? undefined : user.reqBody.email);
            }
            
            if (user.reqBody.password) {
                user.reqBody.password = await hashPassword(user.reqBody.password);
            }
        }
             
        try {
            const userEntity = await Mapper.toUserEntity(user);
            const updatedUser = await this.userRepository.updateUser(id, userEntity);
            if (!updatedUser) {
                throw HttpException(ErrorType.NOT_FOUND, "User not found");
            }
            //TODO: do a new loggin when the username is changed
            //await this.userLogin(updatedUser.username, updatedUser.password);
            const response = await Mapper.toUserDTO(updatedUser);
            return response;
        } catch (error: any) {
            throw HttpException(ErrorType.BAD_REQUEST, "Failed to update user");
        }
    }

    async deleteUser(id: string, user: IUserModel): Promise<IUserDTO> {
        if (!user.userLogged || !await verifyPermission(user.userLogged.permissions, "admin")){
            throw HttpException(ErrorType.FORBIDDEN, '"Access denied"')
        }
        await this.validateObjectId(id);
        const deletedUser = await this.userRepository.deleteUser(id);
        if (!deletedUser) {
            throw HttpException(ErrorType.NOT_FOUND, "User not found");
        }
        const response = await Mapper.toUserDTO(deletedUser);
        return response;
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

    async userLogin(username: string, password:string): Promise<string | undefined> {
        const user = await this.userRepository.findUserByUsername(username);
        if (user && await verifyPassword(password, user.password)){
            const userDTO = await Mapper.toUserDTO(user);
            const token = await generateToken(userDTO);
            if (token){
                return token;
            }
        } else {
            throw HttpException("UNAUTHORIZED", 'Invalid credentials' );
        }
    }
}

export default UserService;