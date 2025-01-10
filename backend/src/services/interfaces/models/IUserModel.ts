export interface IUserModel {
    userLogged?: {
        id: string;
        firstName: string;
        lastName: string;
        email: string;
        gender: string;
        country: string;
        birthDate: Date;
        password: string;
        permissions: Array<'read' | 'write' | 'admin'>;
    };
    reqBody: {
        firstName: string;
        lastName: string;
        email: string;
        gender: string;
        country: string;
        birthDate: Date;
        password: string;
        permissions: Array<'read' | 'write' | 'admin'>;
    }
}

export default IUserModel;