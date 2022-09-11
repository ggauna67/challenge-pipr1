import { User } from "src/users/schemas/user.schema";
import { IUser } from "src/users/interfaces/user.interface";

export interface ICompanyUsers {
    companyId: string;
    name: string;
    users: IUser[]
}