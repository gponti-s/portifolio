import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    gender: { type: String, required: true },
    country: { type: String, required: true },
    birthDate: { type: Date, required: true },
    password: { type: String, required: true },
    permissions: { type: [String], default: ['read'] }
});

export default userSchema;