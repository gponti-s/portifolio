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
        permissions: Array<'red' | 'write' | 'admin'>;
    };
    reqBody: {
        name: string;
        username: string;
        email: string;
        gender: string;
        country: string;
        birthDate: Date;
        password: string;
        permissions: Array<'red' | 'write' | 'admin'>;
    }
}

export default IUserModel;