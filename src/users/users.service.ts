import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { Request } from 'express';
import { IUser } from './interfaces/user.interface';
import { Role } from './enum/role.enum';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    return this.userModel.create(createUserDto);
  }

  async findAll(ids: string[]): Promise<IUser[]> {
    const users = await this.userModel
      .find({ _id: { $in: ids}})
      .exec();

    const response: IUser[] = users.map((usr) => {
      return {
        _id: usr._id,
        name: usr.name,
        email: usr.email,
        roles: usr.roles as unknown as Role[]
      }
    })

    return response;
  }

  async findOne(id: string): Promise<User> {
    return this.userModel.findOne({ _id: id }).exec();
  }
}
