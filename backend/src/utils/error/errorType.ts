import { AppError } from './appError';

export const ErrorType = {
  BAD_REQUEST: 'BAD_REQUEST',
  NOT_FOUND: 'NOT_FOUND',
  UNAUTHORIZED: 'UNAUTHORIZED',
  FORBIDDEN: 'FORBIDDEN',
  INTERNAL_SERVER: 'INTERNAL_SERVER',
  CONFLICT: 'CONFLICT',
} as const;

type ErrorTypeKeys = keyof typeof ErrorType;

const errorMessages: Record<ErrorTypeKeys, string> = {
  BAD_REQUEST: 'Bad request',
  NOT_FOUND: 'Resource not found',
  UNAUTHORIZED: 'Unauthorized access',
  FORBIDDEN: 'Forbidden access',
  INTERNAL_SERVER: 'Internal server error',
  CONFLICT: 'Resource already exists',
};

const statusCodes: Record<ErrorTypeKeys, number> = {
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  INTERNAL_SERVER: 500,
  CONFLICT: 409,
};

export const HttpException = (type: ErrorTypeKeys, message?: string) => {
  return new AppError(
    statusCodes[type],
    message || errorMessages[type]
  );
};
