import { Types } from 'mongoose';
import { HttpException, ErrorType } from "../utils/error/errorType";

export function ValidateObjectId(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        const id = args[0];
        if (!Types.ObjectId.isValid(id)) {
            throw HttpException(ErrorType.BAD_REQUEST, "Invalid object id");
        }
        return originalMethod.apply(this, args);
    };
    return descriptor;
}


// You can add more validators here in the future
