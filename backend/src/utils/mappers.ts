import IUserInput from "../models/userModels/IUserInput";
import IUserOutput from "../models/userModels/IUserOutput";
import IUserEntity from "../models/userModels/IUserEntity";

export class Mapper {
    static async toUserInput(dto: any): Promise<IUserInput> {
        return {
            name: dto.name,
            username: dto.username,
            email: dto.email,
            password: dto.password,
            country: dto.country,
            gender: dto.gender,
            birthDate: dto.birthDate
        } as IUserInput;
    }

    static async toUserEntity(input: IUserInput): Promise<IUserEntity> {
        return {
            name: input.name,
            username: input.username,
            email: input.email,
            password: input.password,
            country: input.country,
            gender: input.gender,
            birthDate: input.birthDate,
        } as IUserEntity;
    }

    static async toUserOutput(user: IUserEntity): Promise<IUserOutput> {
        return {
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email,
            country: user.country,
            gender: user.gender,
            birthDate: user.birthDate,
            // password: user.password,
            // createdAt: user.createdAt,
            // updatedAt: user.updatedAt,
            // lastLogin: user.lastLogin,
            // status: user.status,
            // permissions: user.permissions,
        } as IUserOutput;
    }

    // Add more mapping methods as needed
}

export default Mapper;