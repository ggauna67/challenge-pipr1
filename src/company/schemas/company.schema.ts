import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User, UserSchema } from 'src/users/schemas/user.schema';

export type CompanyDocument = Company & Document;

@Schema()
export class Company {
  @Prop()
  _id: number;

  @Prop()
  name: string;

  @Prop([String])
  users: string[]
}

export const CompanySchema = SchemaFactory.createForClass(Company);
