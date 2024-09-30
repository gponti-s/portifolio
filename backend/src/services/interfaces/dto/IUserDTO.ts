
interface IUserDTO extends Document {
    id: string;
    name: string;
    username: string;
    email: string;
    gender: string;
    country: string;
    birthDate: Date;
    // password: string;
    // createdAt: Date;
    // updatedAt: Date;
    // lastLogin: Date;
    // status: string;
    // permissions: string[];
}

export default IUserDTO;