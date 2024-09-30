import IUserModel from "services/interfaces/models/IUserModel";
import IUserDTO from "./dto/IUserDTO";

interface IUserService {
    findAllUsers(): Promise<IUserDTO[]>;
    findUserById(id: string): Promise<IUserDTO>;
    createUser(user: IUserModel): Promise<IUserDTO>;
    updateUser(id: string, user: IUserModel): Promise<IUserDTO>;
    deleteUser(id: string): Promise<IUserDTO>;
    userLogin(username: string, password: string): Promise<string | undefined>;
}

export default IUserService;
