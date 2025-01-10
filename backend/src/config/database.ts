import dotenv from 'dotenv';
import mongoose from 'mongoose';
import UserRepository from '../repositories/userRepository';
import { UserService } from '../services/userService';
import { IUserModel } from '../services/interfaces/models/IUserModel';
import { AppError } from '../utils/error/appError';

dotenv.config();

const mongoURI = process.env.MONGO_URI as string;

if (!mongoURI) {
    throw new Error('MONGO_URI is not defined');
}

const userService = new UserService(new UserRepository);

async function initializeDatabase() {
    try {
        await mongoose.connect(mongoURI);
        console.log('\u001b[32m\u2714 Connected to MongoDB\u001b[0m');

        const adminPassword = process.env.ADMIN_PASSWORD as string;
        const adminEmail = process.env.ADMIN_EMAIL as string;

        if (mongoose.connection.readyState === 1) {
            if ( adminEmail && adminPassword) {
                const existingAdmin = await userService.findUserByEmail(adminEmail).catch((error) => {
                    if (error.statusCode === 404) {
                        console.log("Admin user not found, proceeding to create one...");
                        return null;
                    }
                    console.log("Error finding admin:", error);
                    throw new AppError(500, 'Error finding admin');
                });
                
                if (!existingAdmin) {
                    const user: IUserModel = {
                        reqBody: {
                            firstName: 'Admin',
                            lastName: 'admin',
                            email: adminEmail,
                            gender: 'male',
                            country: 'ITA',
                            birthDate: new Date(),
                            password: adminPassword,
                            permissions: ["admin"]
                        }
                    };
                    await userService.createUser(user);
                    console.log('\u001b[32m\u2714 Admin created\u001b[0m');
                } else {
                    console.log('\u001b[32m\u2714 Admin user already exists\u001b[0m');
                }
            }
        } else {
            console.error('Database connection is not ready.');
        }
    } catch (error) {
        console.error('\u001b[31m\u274c Error connecting to MongoDB or initializing admin:\u001b[0m', error);
        await mongoose.disconnect();
        console.log('Disconnected from MongoDB');
        process.exit(1);
    }
}
    
export default initializeDatabase;