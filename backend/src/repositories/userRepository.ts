import mongoose from "mongoose";
import userSchema from "./schema/userSchema";
import IUserRepository from "../interfaces/IUserRepository";
import IUserInput from "models/userModels/IUserInput";
import IUserEntity from "models/userModels/IUserEntity";

const UserModel = mongoose.model<IUserEntity>("User", userSchema);

class UserRepository implements IUserRepository {
    async findAllUsers(): Promise<IUserEntity[]> {
        return await UserModel.find();

    }

    async findUserById(id: string): Promise<IUserEntity | null> {
        return await UserModel.findById(id);
    }

    async createUser(user: IUserInput): Promise<IUserEntity> {
        return await UserModel.create(user);
    }

    async updateUser(id: string, user: IUserInput): Promise<IUserEntity | null> {
        return await UserModel.findByIdAndUpdate(id, user, { new: true });
    }

    async deleteUser(id: string): Promise<IUserEntity | null> {
        return await UserModel.findByIdAndDelete(id);
    }

    async findUserByUsername(username: string): Promise<IUserEntity | null> {
        return await UserModel.findOne({ username });
    }

    async findUserByEmail(email: string): Promise<IUserEntity | null> {
        return await UserModel.findOne({ email });
    }

    async findUserByCountry(country: string): Promise<IUserEntity[]> {
        return await UserModel.find({ country });
    }

    async findUserByGender(gender: string): Promise<IUserEntity[]> {
        return await UserModel.find({ gender });
    }
}

export default UserRepository;