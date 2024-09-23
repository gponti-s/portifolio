import mongoose from "mongoose";
import IUser from "../interfaces/IUser";
import userSchema from "./schema/userSchema";

const UserModel = mongoose.model<IUser>("User", userSchema);

class UserRepository {
    async findAllUsers(): Promise<IUser[]> {
        return await UserModel.find();
    }

    async findUserById(id: string): Promise<IUser | null> {
        return await UserModel.findById(id);
    }

    async createUser(user: IUser): Promise<IUser> {
        return await UserModel.create(user);
    }

    async updateUser(id: string, user: IUser): Promise<IUser | null> {
        return await UserModel.findByIdAndUpdate(id, user, { new: true });
    }

    async deleteUser(id: string): Promise<IUser | null> {
        return await UserModel.findByIdAndDelete(id);
    }

    async findUserByUsername(username: string): Promise<IUser | null> {
        return await UserModel.findOne({ username });
    }

    async findUserByEmail(email: string): Promise<IUser | null> {
        return await UserModel.findOne({ email });
    }

    async findUserByCountry(country: string): Promise<IUser[]> {
        return await UserModel.find({ country });
    }

    async findUserByGender(gender: string): Promise<IUser[]> {
        return await UserModel.find({ gender });
    }
}

export default new UserRepository();