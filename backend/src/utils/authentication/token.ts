import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import IUserDTO from 'services/interfaces/dto/IUserDTO';
import { HttpException, ErrorType } from '../error/errorType';

interface CustomRequest extends Request {
    userLogged?: any;
}


export async function generateToken(user: IUserDTO) {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw HttpException(ErrorType.INTERNAL_SERVER, 'JWT_SECRET is not defined');
    }
    const payload = user;
    const options = { expiresIn: '1h' };
    return jwt.sign(payload, secret, options);
};

export async function verifyToken(req: CustomRequest, res: Response, next: NextFunction) {
    const token = req.headers['authorization']?.split(' ')[1];
    
    if (!token) {
        return next(HttpException(ErrorType.BAD_REQUEST, "Token inexistent")); 
    }
    const jwtSecret = process.env.JWT_SECRET;    
    
    if (!jwtSecret) {
        return next(HttpException(ErrorType.INTERNAL_SERVER, "JWT_SECRET is not defined")); 
    }
    jwt.verify(token, jwtSecret, (err, user) => {
        if (err) {
            return next(HttpException(ErrorType.FORBIDDEN, 'Forbidden - invalid token')); 
        }
        req.userLogged = user;
        next();
    });
}