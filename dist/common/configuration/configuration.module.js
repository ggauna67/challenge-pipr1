"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigurationNestModule = void 0;
const configuration_service_1 = require("./configuration.service");
const config_1 = require("@nestjs/config");
const common_1 = require("@nestjs/common");
let ConfigurationNestModule = class ConfigurationNestModule {
};
ConfigurationNestModule = __decorate([
    (0, common_1.Module)({
        exports: [configuration_service_1.ConfigurationNestService],
        imports: [config_1.ConfigModule.forRoot()],
        providers: [configuration_service_1.ConfigurationNestService]
    })
], ConfigurationNestModule);
exports.ConfigurationNestModule = ConfigurationNestModule;
//# sourceMappingURL=configuration.module.js.map