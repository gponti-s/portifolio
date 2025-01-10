import IUserModel from "../../services/interfaces/models/IUserModel";
import IUserDTO from "./dto/IUserDTO";
import IUserAdminDTO from "./dto/IUserAdminDTO";
import IUserEntity from "../../repositories/interfaces/entities/IUserEntity";

interface IUserService {
    findAllUsers(user: IUserModel): Promise<IUserAdminDTO[]>;
    findUserById(id: string): Promise<IUserDTO>;
    createUser(user: IUserModel): Promise<IUserDTO>;
    updateUser(id: string, user: IUserModel): Promise<IUserDTO>;
    deleteUser(id: string, user: IUserModel): Promise<IUserDTO>;
    userLogin(username: string, password: string): Promise<{token: string; userDTO: IUserDTO} | undefined>;
}

export default IUserService;
