import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import IUserDTO from 'services/interfaces/dto/IUserDTO';

interface CustomRequest extends Request {
    userLogged?: any;
}


export async function generateToken(user: IUserDTO) {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw new Error('JWT_SECRET is not defined');
    }
    const payload = user;
    const options = { expiresIn: '1h' };
    return jwt.sign(payload, secret, options);
};

export async function verifyToken(req: CustomRequest, res: Response, next: NextFunction) {
    const token = req.headers['authorization']?.split(' ')[1];
    
    if (!token) return res.sendStatus(401); 
    
    const jwtSecret = process.env.JWT_SECRET;    
    
    if (!jwtSecret) return res.sendStatus(500);
    jwt.verify(token, jwtSecret, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Forbidden' });
        }
        req.userLogged = user;
        next();
    });
}