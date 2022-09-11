/// <reference types="mongoose/types/pipelinestage" />
import { Document } from 'mongoose';
export declare type CompanyDocument = Company & Document;
export declare class Company {
    _id: number;
    name: string;
    users: string[];
}
export declare const CompanySchema: import("mongoose").Schema<Company, import("mongoose").Model<Company, any, any, any>, any, any>;
