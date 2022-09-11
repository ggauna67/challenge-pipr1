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
exports.ConfigurationNestService = void 0;
const config_1 = require("@nestjs/config");
const common_1 = require("@nestjs/common");
let ConfigurationNestService = class ConfigurationNestService {
    constructor(_configService) {
        this._configService = _configService;
        this._connectionString = this._getConnectionStringFromEnvFile();
        this._jwtSecret = this._getJWTSecretFromEnvFile();
        this._jwtExpirationTime = this._getJWTExpirationTimeFromEnvFile();
    }
    get connectionString() {
        return this._getConnectionStringFromEnvFile();
    }
    get jwtSecret() {
        return this._getJWTSecretFromEnvFile();
    }
    get expirationTime() {
        return this._getJWTExpirationTimeFromEnvFile();
    }
    _getConnectionStringFromEnvFile() {
        const connectionString = this._configService.get('MONGODB_DB_URI');
        if (!connectionString) {
            throw new Error('No connection string has been provided in the .env file.');
        }
        return connectionString;
    }
    _getJWTSecretFromEnvFile() {
        const jwtSecret = this._configService.get('JWT_SECRET');
        if (!jwtSecret) {
            throw new Error('No JWT Secret provided in the .env file.');
        }
        return jwtSecret;
    }
    _getJWTExpirationTimeFromEnvFile() {
        const jwtExpirationTime = this._configService.get('JWT_EXPIRATIONTIME');
        if (!jwtExpirationTime) {
            throw new Error('No JWT Expiration time provided in the .env file.');
        }
        return jwtExpirationTime;
    }
};
ConfigurationNestService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], ConfigurationNestService);
exports.ConfigurationNestService = ConfigurationNestService;
//# sourceMappingURL=configuration.service.js.map