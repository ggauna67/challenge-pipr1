export class CreateUserDto {
  readonly _id: string;

  readonly name: string;

  readonly email: string;

  readonly roles: string[];
}
