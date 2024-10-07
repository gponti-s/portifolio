export interface IUserModel {
    userLogged?: {
        id: string;
        name: string;
        username: string;
        email: string;
        gender: string;
        country: string;
        birthDate: Date;
        password: string;
        permissions: [];
    };
    reqBody: {
        name: string;
        username: string;
        email: string;
        gender: string;
        country: string;
        birthDate: Date;
        password: string;
        permissions: [];
    }
}

export default IUserModel;