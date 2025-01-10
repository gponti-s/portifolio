interface IUserDTO {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    country: string;
    gender: string;
    birthDate: Date;
    permissions: string[];
}

export default IUserDTO;