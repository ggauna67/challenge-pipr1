import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Role } from '../enum/role.enum';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  _id: string; //username

  @Prop()
  password: string;

  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop([String])
  roles: {type: [String], default: [Role.User]};
}

export const UserSchema = SchemaFactory.createForClass(User);
