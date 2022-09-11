import { User } from 'src/users/schemas/user.schema';

export class CreateCompanyDto {
  readonly _id: string;

  readonly name: string;

  readonly users: User[];
}
