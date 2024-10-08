import { Schema } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    birthDate: {
        type: Date,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    lastLogin: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['active', 'inactive', 'blocked'],
        default: 'active'
    },
    permissions: {
        type: [String],
        enum: ['read', 'write', 'admin'],
        default: ['read', 'write']
    }
}, { timestamps: true });

userSchema.pre('save', function(next){
    if (!this.permissions || this.permissions.length === 0){
        this.permissions = ['read', 'write'];
    }
    next();
});

export default userSchema;