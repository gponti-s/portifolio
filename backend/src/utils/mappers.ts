import IUserModel from "../services/interfaces/models/IUserModel";
import IUserDTO from "../services/interfaces/dto/IUserDTO";
import IUserAdminDTO from "../services/interfaces/dto/IUserAdminDTO";
import IUserEntity from "../repositories/interfaces/entities/IUserEntity";

export class Mapper {
    static async toUserModel(req: any): Promise<IUserModel> {
        return {
            userLogged: {
                id: req.userLogged.id,
                firstName: req.userLogged.firstName,
                lastName: req.userLogged.lastName,
                email: req.userLogged.email,
                gender: req.userLogged.gender,
                country: req.userLogged.country,
                birthDate: req.userLogged.birthDate,
                permissions: req.userLogged.permissions,
            },
            reqBody: {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
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
            firstName: input.reqBody.firstName,
            lastName: input.reqBody.lastName,
            email: input.reqBody.email,
            country: input.reqBody.country,
            gender: input.reqBody.gender,
            birthDate: input.reqBody.birthDate,
            password: input.reqBody.password,
            permissions: input.reqBody.permissions
        } as IUserEntity;
    }

    static async toUserDTO(user: IUserEntity): Promise<IUserDTO> {
        return {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            country: user.country,
            gender: user.gender,
            birthDate: user.birthDate,
            //password: user.password,
            // createdAt: user.createdAt,
            // updatedAt: user.updatedAt,
            // lastLogin: user.lastLogin,
            // status: user.status,
            permissions: user.permissions
        } as IUserDTO;
    }

    static async toUserAdminDTO(user: IUserEntity): Promise<IUserAdminDTO> {
        return {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            country: user.country,
            gender: user.gender,
            birthDate: user.birthDate,
            password: user.password,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
            lastLogin: user.lastLogin,
            status: user.status,
            permissions: user.permissions,
        } as IUserAdminDTO;
    }

}

export default Mapper;