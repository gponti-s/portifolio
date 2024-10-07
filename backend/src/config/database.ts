import dotenv from 'dotenv';
import mongoose from 'mongoose';
import UserRepository from '../repositories/userRepository';
import UserService from '../services/userService';
import {IUserModel} from 'services/interfaces/models/IUserModel';

dotenv.config();

const mongoURI = process.env.MONGO_URI as string;

if (!mongoURI) {
    throw new Error('MONGO_URI is not defined');
}

const userService = new UserService(new UserRepository);

async function initializeDatabase() {
    try {
        await mongoose.connect(mongoURI);
        console.log('Connected to MongoDB');
        
        // const adminUsername = process.env.ADMIN_USERNAME as string;
        // const adminPassword = process.env.ADMIN_PASSWORD as string;
        // const adminEmail = process.env.ADMIN_EMAIL as string;
        // console.log(adminPassword, adminEmail, adminUsername)
        
        // if (adminUsername && adminEmail && adminPassword) {
        //     const user: IUserModel = {
        //         userLogged: {
        //             id: '',
        //             name: 'Admin',
        //             username: adminUsername,
        //             email: adminEmail,
        //             gender: '',
        //             country: '',
        //             birthDate: new Date(),
        //             password: adminPassword,
        //             permissions: []
        //         },
        //         reqBody: {
        //             name: 'Admin',
        //             username: adminUsername,
        //             email: adminEmail,
        //             gender: 'male',
        //             country: 'ITA',
        //             birthDate: new Date(),
        //             password: adminPassword,
        //             permissions: []
        //         }
        //     };
        //     await userService.createUser(user);
        //} 
    } catch (error) {
        console.error('Error connecting to MongoDB or initializing admin:', error);
        //await mongoose.disconnect();
        console.log('Disconnected from MongoDB');
        //process.exit(1);
    }
}
    
export default initializeDatabase;