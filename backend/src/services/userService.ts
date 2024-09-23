import { userConfig } from "hardhat";
import IUser from "../interfaces/IUser";
import UserRepository from "../repositories/userRepository";



export class UserService {
    constructor(private readonly userRepository: typeof UserRepository) {
        //userRepository = new UserRepository();
    }

    async findAllUsers(): Promise<IUser[]> {
        return this.userRepository.findAllUsers();
    };

    async findUserById(id: string): Promise<IUser | null> {
        return this.userRepository.findUserById(id);
    };

    async createUser(user: IUser): Promise<IUser> {
        return this.userRepository.createUser(user);
    };

    async updateUser(id: string, user: IUser): Promise<IUser | null> {
        const existingUser = await this.userRepository.findUserById(id);
        if (!existingUser) {
            throw new Error("User not found");
        }
        return this.userRepository.updateUser(id, user);
    };

    async deleteUser(id: string): Promise<IUser | null> {
        return this.userRepository.deleteUser(id);
    };
    
    async findUserByEmail(email: string): Promise<IUser | null> {
        return this.userRepository.findUserByEmail(email);
    };

    async findUserByUsername(username: string): Promise<IUser | null> {
        return this.userRepository.findUserByUsername(username);
    };

    async findUserByCountry(country: string): Promise<IUser[]> {
        return this.userRepository.findUserByCountry(country);
    };

    async findUserByGender(gender: string): Promise<IUser[]> {
        return this.userRepository.findUserByGender(gender);
    };  
}