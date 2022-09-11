import { Role } from "../enum/role.enum";

export interface IUser {
  _id: string;
  name: string;
  email: string;
  roles: Role[];
}