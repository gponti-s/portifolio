import IUserModel from "../services/interfaces/models/IUserModel";
import IUserDTO from "../services/interfaces/dto/IUserDTO";
import IUserEntity from "../repositories/interfaces/entities/IUserEntity";

export class Mapper {
    static async toUserInput(dto: any): Promise<IUserModel> {
        return {
            name: dto.name,
            username: dto.username,
            email: dto.email,
            password: dto.password,
            country: dto.country,
            gender: dto.gender,
            birthDate: dto.birthDate
        } as IUserModel;
    }

    static async toUserEntity(input: IUserModel): Promise<IUserEntity> {
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

    static async toUserDTO(user: IUserEntity): Promise<IUserDTO> {
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
        } as IUserDTO;
    }

    // Add more mapping methods as needed
}

export default Mapper;