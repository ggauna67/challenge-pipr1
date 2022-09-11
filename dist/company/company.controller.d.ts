import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { AddUserCompanyDto } from './dto/add-user-company.dto';
export declare class CompanyController {
    private readonly companyService;
    constructor(companyService: CompanyService);
    protectedRoute(id: string): Promise<import("./schemas/company.schema").Company>;
    protectedRouteSuperAdmin(id: string): Promise<import("./schemas/company.schema").Company>;
    getAllUsersCompany(id: string): Promise<import("./interfaces/company-users.interface").ICompanyUsers>;
    addUser(addUserCompanyDto: AddUserCompanyDto): Promise<import("./schemas/company.schema").Company>;
    create(createCompanyDto: CreateCompanyDto): Promise<import("./schemas/company.schema").Company>;
}
