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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const jwt_1 = require("@nestjs/jwt");
const configuration_service_1 = require("../common/configuration/configuration.service");
let AuthService = class AuthService {
    constructor(userService, jwtService, configService) {
        this.userService = userService;
        this.jwtService = jwtService;
        this.configService = configService;
    }
    async login(authObject) {
        const { username, password } = authObject;
        const userFound = await await this.userService.findOne(username);
        ;
        if (!userFound)
            throw new common_1.HttpException('User not found', 404);
        if (!(password === userFound.password)) {
            throw new common_1.HttpException('Wrong password', 401);
        }
        const expirationTime = this.configService.expirationTime;
        const payload = { user: username, roles: userFound.roles };
        const token = await this.jwtService.sign(payload, { secret: 'C0D1G0SUP3RS3CR3T0P4R4JWT',
            expiresIn: '1h' });
        const data = {
            user: username,
            token: token,
            expirationTime: expirationTime,
        };
        return data;
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService,
        configuration_service_1.ConfigurationNestService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map