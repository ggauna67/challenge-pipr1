import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
  Put
} from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { JwtAuthGuard } from 'src/auth/guard/auth.guard';
import { RolesGuard } from 'src/auth/guard/roles.guard.';
import { HasRoles } from 'src/auth/decorators/has-roles.decorator';
import { Role } from 'src/users/enum/role.enum';
import { AddUserCompanyDto } from './dto/add-user-company.dto';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @HasRoles(Role.User, Role.Admin, Role.SuperUser)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get('protectedroute/:id')
  async protectedRoute(@Param('id') id: string) {
    return this.companyService.findOne(id);
  }

  @HasRoles(Role.SuperUser)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get('protectedroutesuperadmin/:id')
  async protectedRouteSuperAdmin(@Param('id') id: string) {
    return this.companyService.findOne(id);
  }

  @HasRoles(Role.Admin, Role.SuperUser)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get('users/:company_id')
  async getAllUsersCompany(@Param('company_id') id: string) {
    return this.companyService.findAllUsersCompany(id);
  }

  @HasRoles(Role.Admin, Role.SuperUser)
  @Put('/users')
  async addUser(@Body() addUserCompanyDto: AddUserCompanyDto) {
    return this.companyService.addUser(addUserCompanyDto);
  }

  @HasRoles(Role.Admin, Role.SuperUser)
  @Post()
  async create(@Body() createCompanyDto: CreateCompanyDto) {
    return this.companyService.create(createCompanyDto);
  }
}
