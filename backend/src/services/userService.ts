import IUser from "../interfaces/IUser";
import UserRepository from "../repositories/userRepository";
import { HttpException, ErrorType } from "../utils/error/errorType";
import { Types } from "mongoose";

export class UserService {
    constructor(private readonly userRepository: typeof UserRepository) {}

    async validateObjectId(id: string): Promise<void> {
        if (!Types.ObjectId.isValid(id)) {
            throw HttpException(ErrorType.BAD_REQUEST, "Invalid user id");
        }
    }
    async validateUserExists(user: IUser): Promise<void> {
        const emailExists = await this.userRepository.findUserByEmail(user.email);
        const usernameExists = await this.userRepository.findUserByUsername(user.username);
        if (emailExists || usernameExists) {
            throw HttpException(ErrorType.CONFLICT, "User with this email or username already exists");
        }
    }
    
    async findAllUsers(): Promise<IUser[]> {
        try {
            return await this.userRepository.findAllUsers();
        } catch (error) {
            throw HttpException(ErrorType.INTERNAL_SERVER, "Failed to fetch users");
        }
    }

    async findUserById(id: string): Promise<IUser> {
        await this.validateObjectId(id);
        const user = await this.userRepository.findUserById(id);
        if (!user) {
            throw HttpException(ErrorType.NOT_FOUND, "User not found");
        }
        return user;
    }

    async createUser(user: IUser): Promise<IUser> {
        await this.validateUserExists(user);
        try {
            return await this.userRepository.createUser(user);
        } catch (error: any) {
            if (error.code === 11000) {
                throw HttpException(ErrorType.CONFLICT, "User already exists");
            }
            throw HttpException(ErrorType.BAD_REQUEST, "Failed to create user");
        }
    }

    async updateUser(id: string, user: IUser): Promise<IUser> {
        await this.validateObjectId(id);
        try {
            const updatedUser = await this.userRepository.updateUser(id, user);
            if (!updatedUser) {
                throw HttpException(ErrorType.NOT_FOUND, "User not found");
            }
            return updatedUser;
        } catch (error: any) {
            if (error.code === 11000) {
                throw HttpException(ErrorType.CONFLICT, "User with this email or username already exists");
            }
            throw HttpException(ErrorType.BAD_REQUEST, "Failed to update user");
        }
    }

    async deleteUser(id: string): Promise<IUser> {
        await this.validateObjectId(id);
        const deletedUser = await this.userRepository.deleteUser(id);
        if (!deletedUser) {
            throw HttpException(ErrorType.NOT_FOUND, "User not found");
        }
        return deletedUser;
    }
    
    async findUserByEmail(email: string): Promise<IUser> {
        if (!email || typeof email !== 'string') {
            throw HttpException(ErrorType.BAD_REQUEST, "Invalid email");
        }
        const user = await this.userRepository.findUserByEmail(email);
        if (!user) {
            throw HttpException(ErrorType.NOT_FOUND, "User not found");
        }
        return user;
    }

    async findUserByUsername(username: string): Promise<IUser> {
        if (!username || typeof username !== 'string') {
            throw HttpException(ErrorType.BAD_REQUEST, "Invalid username");
        }
        const user = await this.userRepository.findUserByUsername(username);
        if (!user) {
            throw HttpException(ErrorType.NOT_FOUND, "User not found");
        }
        return user;
    }

    async findUsersByCountry(country: string): Promise<IUser[]> {
        if (!country || typeof country !== 'string') {
            throw HttpException(ErrorType.BAD_REQUEST, "Invalid country");
        }
        const users = await this.userRepository.findUserByCountry(country);
        if (users.length === 0) {
            throw HttpException(ErrorType.NOT_FOUND, "No users found for the given country");
        }
        return users;
    }

    async findUsersByGender(gender: string): Promise<IUser[]> {
        if (!gender || typeof gender !== 'string') {
            throw HttpException(ErrorType.BAD_REQUEST, "Invalid gender");
        }
        const users = await this.userRepository.findUserByGender(gender);
        if (users.length === 0) {
            throw HttpException(ErrorType.NOT_FOUND, "No users found for the given gender");
        }
        return users;
    }
}