"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const company_schema_1 = require("./schemas/company.schema");
const users_service_1 = require("../users/users.service");
let CompanyService = class CompanyService {
    constructor(companyModel, usersService) {
        this.companyModel = companyModel;
        this.usersService = usersService;
    }
    async create(createCompanyDto) {
        return this.companyModel.create(createCompanyDto);
    }
    async findAllUsersCompany(companyId) {
        const [company] = await this.companyModel
            .find({ _id: companyId })
            .exec();
        const userIds = company.users.map((usr) => usr);
        const usersWithInformation = await this.usersService.findAll(userIds);
        console.log("user con info:" + usersWithInformation);
        const response = {
            companyId: company._id,
            name: company.name,
            users: usersWithInformation
        };
        return response;
    }
    async addUser(addUserCompanyDto) {
        const { id: companyId, users: usersDto } = addUserCompanyDto;
        const findQuery = { _id: companyId };
        const updateQuery = { users: usersDto };
        await this.companyModel.findOneAndUpdate(findQuery, updateQuery);
        return this.companyModel.findOne(findQuery).exec();
    }
    async findOne(id) {
        return this.companyModel.findOne({ _id: id }).exec();
    }
};
CompanyService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(company_schema_1.Company.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        users_service_1.UsersService])
], CompanyService);
exports.CompanyService = CompanyService;
//# sourceMappingURL=company.service.js.map