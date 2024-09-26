import IUserEntity from "models/userModels/IUserEntity";
import IUserInput from "models/userModels/IUserInput";

interface IUserRepository {
    findAllUsers(): Promise<IUserEntity[] | null>;
    findUserById(id: string): Promise<IUserEntity    | null>;
    createUser(user: IUserInput): Promise<IUserEntity | null>;
    updateUser(id: string, user: IUserInput): Promise<IUserEntity | null>;
    deleteUser(id: string): Promise<IUserEntity | null>;
    findUserByEmail(email: string): Promise<IUserEntity | null>;
    findUserByUsername(username: string): Promise<IUserEntity | null>;
    findUserByCountry(country: string): Promise<IUserEntity[] | null>;
    findUserByGender(gender: string): Promise<IUserEntity[] | null>;
}

export default IUserRepository;
