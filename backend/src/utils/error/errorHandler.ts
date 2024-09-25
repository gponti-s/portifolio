import { Request, Response, NextFunction } from 'express';
import { AppError } from './appError';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      success: false,
      error: err.message,
      isOperational: err.isOperational,
      stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack,
    });
  }

  // For unhandled errors
  console.error('Unhandled error:', err);
  res.status(500).json({
    success: false,
    error: 'Internal Server Error',
    isOperational: false,
    stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack,
  });
};
