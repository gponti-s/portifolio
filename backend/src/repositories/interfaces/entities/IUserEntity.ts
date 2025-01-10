interface IUserEntity {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    country: string;
    birthDate: Date;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    lastLogin: Date;
    status: string;
    permissions: Array<'read' | 'write' | 'admin'>;

}

export default IUserEntity;