import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { format } from 'path';

interface CustomRequest extends Request {
    user?: any;
}

export async function generateToken(user: any) {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw new Error('JWT_SECRET is not defined');
    }
    return jwt.sign({ id: user.id, username: user.username }, secret, { expiresIn: '1h' })
};

export async function authenticateToken(req: CustomRequest, res: Response, next: NextFunction) {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) return res.sendStatus(401);
    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) return res.sendStatus(500);
    jwt.verify(token, jwtSecret, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}