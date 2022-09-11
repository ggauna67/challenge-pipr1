import { CreateCompanyDto } from './dto/create-company.dto';
import { Model } from 'mongoose';
import { Company, CompanyDocument } from './schemas/company.schema';
import { ICompanyUsers } from './interfaces/company-users.interface';
import { UsersService } from 'src/users/users.service';
import { AddUserCompanyDto } from './dto/add-user-company.dto';
export declare class CompanyService {
    private readonly companyModel;
    private usersService;
    constructor(companyModel: Model<CompanyDocument>, usersService: UsersService);
    create(createCompanyDto: CreateCompanyDto): Promise<Company>;
    findAllUsersCompany(companyId: string): Promise<ICompanyUsers>;
    addUser(addUserCompanyDto: AddUserCompanyDto): Promise<Company>;
    findOne(id: string): Promise<Company>;
}
