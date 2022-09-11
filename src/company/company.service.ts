import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Company, CompanyDocument } from './schemas/company.schema';
import { ICompanyUsers } from './interfaces/company-users.interface';
import { UsersService } from 'src/users/users.service';
import { AddUserCompanyDto } from './dto/add-user-company.dto';

@Injectable()
export class CompanyService {
  constructor(
    @InjectModel(Company.name) private readonly companyModel: Model<CompanyDocument>,
    private usersService: UsersService
  ) {}

  async create(createCompanyDto: CreateCompanyDto): Promise<Company> {
    return this.companyModel.create(createCompanyDto);
  }

  async findAllUsersCompany(companyId: string): Promise<ICompanyUsers> {
    const [ company ] = await this.companyModel
      .find({ _id: companyId})
      .exec();

    const userIds = company.users.map((usr) => usr);

    const usersWithInformation = await this.usersService.findAll(userIds);
    console.log("user con info:"+usersWithInformation);
    const response: ICompanyUsers = {
      companyId: company._id,
      name: company.name,
      users: usersWithInformation
    }  
    return response; 
  }

  async addUser(addUserCompanyDto: AddUserCompanyDto): Promise<Company> {
    const { id: companyId, users: usersDto } = addUserCompanyDto;

    const findQuery = { _id: companyId };
    const updateQuery = {  users: usersDto };
    await this.companyModel.findOneAndUpdate(findQuery,updateQuery);
    return this.companyModel.findOne(findQuery).exec();
  }

  async findOne(id: string): Promise<Company> {
    return this.companyModel.findOne({ _id: id }).exec();
  }
}
