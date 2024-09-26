import IUserOutput from "../models/userModels/IUserOutput";
import IUserInput from "../models/userModels/IUserInput";
import UserRepository from "../repositories/userRepository";
import { HttpException, ErrorType } from "../utils/error/errorType";
import { Types } from "mongoose";
import IUserRepository from "../interfaces/IUserRepository";
import IUserService from "../interfaces/IUserService";
import Mapper from "../utils/mappers";


export class UserService implements IUserService {
    constructor(private readonly userRepository: IUserRepository) {}

    async validateObjectId(id: string): Promise<void> {
        if (!Types.ObjectId.isValid(id)) {
            throw HttpException(ErrorType.BAD_REQUEST, "Invalid user id");
        }
    }
    async validateUserExists(user: IUserInput): Promise<void> {
        const emailExists = await this.userRepository.findUserByEmail(user.email);
        const usernameExists = await this.userRepository.findUserByUsername(user.username);
        if (emailExists || usernameExists) {
            throw HttpException(ErrorType.CONFLICT, "User with this email or username already exists");
        }
    }
    
    async findAllUsers(): Promise<IUserOutput[]> {
        try {
            const users = await this.userRepository.findAllUsers();
            if (!users || users.length === 0) {
                throw HttpException(ErrorType.NOT_FOUND, "No users found");
            }
            const response = await Promise.all(users.map(user => Mapper.toUserOutput(user)));
            return response;
        } catch (error) {
            throw HttpException(ErrorType.INTERNAL_SERVER, "Failed to fetch users");
        }
    }

    async findUserById(id: string): Promise<IUserOutput> {
        await this.validateObjectId(id);
        try {
            const user = await this.userRepository.findUserById(id);
            if (!user) {
            throw HttpException(ErrorType.NOT_FOUND, "User not found");
            }
            const response = await Mapper.toUserOutput(user);
            return response;
        } catch (error) {
            throw HttpException(ErrorType.INTERNAL_SERVER, "Failed to fetch user");
        }
    }

    async createUser(user: IUserInput): Promise<IUserOutput> {
        await this.validateUserExists(user);
        try {
            const createdUser = await this.userRepository.createUser(user);
            if (!createdUser) {
                throw HttpException(ErrorType.INTERNAL_SERVER, "Failed to create user");
            }
            const response = await Mapper.toUserOutput(createdUser);
            return response;
        } catch (error: any) {
            throw HttpException(ErrorType.BAD_REQUEST, "Failed to create user");
        }
    }

    async updateUser(id: string, user: IUserInput): Promise<IUserOutput> {
        await this.validateObjectId(id);
        try {
            const updatedUser = await this.userRepository.updateUser(id, user);
            if (!updatedUser) {
                throw HttpException(ErrorType.NOT_FOUND, "User not found");
            }
            const response = Mapper.toUserOutput(updatedUser);
            return response;
        } catch (error: any) {
            throw HttpException(ErrorType.BAD_REQUEST, "Failed to update user");
        }
    }

    async deleteUser(id: string): Promise<IUserOutput> {
        await this.validateObjectId(id);
        const deletedUser = await this.userRepository.deleteUser(id);
        if (!deletedUser) {
            throw HttpException(ErrorType.NOT_FOUND, "User not found");
        }
        const response = await Mapper.toUserOutput(deletedUser);
        return response;
    }
    
    async findUserByEmail(email: string): Promise<IUserOutput> {
        if (!email || typeof email !== 'string') {
            throw HttpException(ErrorType.BAD_REQUEST, "Invalid email");
        }
        const user = await this.userRepository.findUserByEmail(email);
        if (!user) {
            throw HttpException(ErrorType.NOT_FOUND, "User not found");
        }
        const response = await Mapper.toUserOutput(user);
        return response;
    }

    async findUserByUsername(username: string): Promise<IUserOutput> {
        if (!username || typeof username !== 'string') {
            throw HttpException(ErrorType.BAD_REQUEST, "Invalid username");
        }
        const user = await this.userRepository.findUserByUsername(username);
        if (!user) {
            throw HttpException(ErrorType.NOT_FOUND, "User not found");
        }
        const response = await Mapper.toUserOutput(user);
        return response;
    }

    async findUsersByCountry(country: string): Promise<IUserOutput[]> {
        if (!country || typeof country !== 'string') {
            throw HttpException(ErrorType.BAD_REQUEST, "Invalid country");
        }
        const users = await this.userRepository.findUserByCountry(country);
        if (!users || users.length === 0) {
            throw HttpException(ErrorType.NOT_FOUND, "No users found for the given country");
        }
        const response = await Promise.all(users.map( user => Mapper.toUserOutput(user)));
        return response;
    }

    async findUsersByGender(gender: string): Promise<IUserOutput[]> {
        if (!gender || typeof gender !== 'string') {
            throw HttpException(ErrorType.BAD_REQUEST, "Invalid gender");
        }
        const users = await this.userRepository.findUserByGender(gender);
        if (!users || users.length === 0) {
            throw HttpException(ErrorType.NOT_FOUND, "No users found for the given gender");
        }
        const response = await Promise.all(users.map(user => Mapper.toUserOutput(user)));
        return response;
    }
}

export default UserService;