/// <reference types="mongoose/types/pipelinestage" />
import { Document } from 'mongoose';
import { Role } from '../enum/role.enum';
export declare type UserDocument = User & Document;
export declare class User {
    _id: string;
    password: string;
    name: string;
    email: string;
    roles: {
        type: [String];
        default: [Role.User];
    };
}
export declare const UserSchema: import("mongoose").Schema<User, import("mongoose").Model<User, any, any, any>, any, any>;
