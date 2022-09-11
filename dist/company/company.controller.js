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
exports.CompanyController = void 0;
const common_1 = require("@nestjs/common");
const company_service_1 = require("./company.service");
const create_company_dto_1 = require("./dto/create-company.dto");
const auth_guard_1 = require("../auth/guard/auth.guard");
const roles_guard_1 = require("../auth/guard/roles.guard.");
const has_roles_decorator_1 = require("../auth/decorators/has-roles.decorator");
const role_enum_1 = require("../users/enum/role.enum");
const add_user_company_dto_1 = require("./dto/add-user-company.dto");
let CompanyController = class CompanyController {
    constructor(companyService) {
        this.companyService = companyService;
    }
    async protectedRoute(id) {
        return this.companyService.findOne(id);
    }
    async protectedRouteSuperAdmin(id) {
        return this.companyService.findOne(id);
    }
    async getAllUsersCompany(id) {
        return this.companyService.findAllUsersCompany(id);
    }
    async addUser(addUserCompanyDto) {
        return this.companyService.addUser(addUserCompanyDto);
    }
    async create(createCompanyDto) {
        return this.companyService.create(createCompanyDto);
    }
};
__decorate([
    (0, has_roles_decorator_1.HasRoles)(role_enum_1.Role.User, role_enum_1.Role.Admin, role_enum_1.Role.SuperUser),
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Get)('protectedroute/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "protectedRoute", null);
__decorate([
    (0, has_roles_decorator_1.HasRoles)(role_enum_1.Role.SuperUser),
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Get)('protectedroutesuperadmin/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "protectedRouteSuperAdmin", null);
__decorate([
    (0, has_roles_decorator_1.HasRoles)(role_enum_1.Role.SuperUser),
    (0, common_1.UseGuards)(auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Get)('users/:company_id'),
    __param(0, (0, common_1.Param)('company_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "getAllUsersCompany", null);
__decorate([
    (0, common_1.Put)('/users'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_user_company_dto_1.AddUserCompanyDto]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "addUser", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_company_dto_1.CreateCompanyDto]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "create", null);
CompanyController = __decorate([
    (0, common_1.Controller)('company'),
    __metadata("design:paramtypes", [company_service_1.CompanyService])
], CompanyController);
exports.CompanyController = CompanyController;
//# sourceMappingURL=company.controller.js.map