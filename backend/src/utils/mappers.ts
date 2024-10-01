import IUserModel from "../services/interfaces/models/IUserModel";
import IUserDTO from "../services/interfaces/dto/IUserDTO";
import IUserEntity from "../repositories/interfaces/entities/IUserEntity";

export class Mapper {
    static async toUserModel(req: any): Promise<IUserModel> {
        return {
            userLogged: {
                id: req.userLogged.id,
                name: req.userLogged.name,
                username: req.userLogged.username,
                email: req.userLogged.email,
                gender: req.userLogged.gender,
                country: req.userLogged.gender,
                birthDate: req.userLogged.birthDate,
                permissions: req.userLogged.permissions,
            },
            reqBody: {
                name: req.body.name,
                username: req.body.username,
                email: req.body.email,
                gender: req.body.gender,
                country: req.body.country,
                birthDate: req.body.birthDate,
                password: req.body.password,
                permissions: req.body.permissions,
            }
        } as IUserModel;
    }

    static async toUserEntity(input: IUserModel): Promise<IUserEntity> {
        return {
            name: input.reqBody.name,
            username: input.reqBody.username,
            email: input.reqBody.email,
            password: input.reqBody.password,
            country: input.reqBody.country,
            gender: input.reqBody.gender,
            birthDate: input.reqBody.birthDate,
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
            permissions: user.permissions,
        } as IUserDTO;
    }

    // Add more mapping methods as needed
}

export default Mapper;