import IUserEntity from "./entities/IUserEntity";

interface IUserRepository {
    findAllUsers(): Promise<IUserEntity[] | null>;
    findUserById(id: string): Promise<IUserEntity    | null>;
    createUser(user: IUserEntity): Promise<IUserEntity | null>;
    updateUser(id: string, user: IUserEntity): Promise<IUserEntity | null>;
    deleteUser(id: string): Promise<IUserEntity | null>;
    findUserByEmail(email: string): Promise<IUserEntity | null>;
    findUserByUsername(username: string): Promise<IUserEntity | null>;
    findUserByCountry(country: string): Promise<IUserEntity[] | null>;
    findUserByGender(gender: string): Promise<IUserEntity[] | null>;
}

export default IUserRepository;
