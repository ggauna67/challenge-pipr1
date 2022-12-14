"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const auth_controller_1 = require("./auth.controller");
const auth_strategy_1 = require("./auth.strategy");
const users_module_1 = require("../users/users.module");
const jwt_1 = require("@nestjs/jwt");
const configuration_service_1 = require("../common/configuration/configuration.service");
const configuration_module_1 = require("../common/configuration/configuration.module");
const jwt_2 = require("@nestjs/jwt");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            users_module_1.UsersModule,
            configuration_module_1.ConfigurationNestModule,
            jwt_2.JwtModule.register({
                secret: 'C0D1G0SUP3RS3CR3T0P4R4JWT',
                signOptions: { expiresIn: '1h' }
            })
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService, auth_strategy_1.JwtStrategy, jwt_1.JwtService]
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map