import IUserInput from "models/userModels/IUserInput";
import IUserOutput from "../models/userModels/IUserOutput";
import IUser from "../models/userModels/IUserOutput";

interface IUserService {
    findAllUsers(): Promise<IUserOutput[]>;
    findUserById(id: string): Promise<IUserOutput>;
    createUser(user: IUserInput): Promise<IUserOutput>;
    updateUser(id: string, user: IUserInput): Promise<IUserOutput>;
    deleteUser(id: string): Promise<IUserOutput>;
}

export default IUserService;
