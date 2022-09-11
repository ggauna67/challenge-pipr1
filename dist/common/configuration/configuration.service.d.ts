import { ConfigService } from "@nestjs/config";
export declare class ConfigurationNestService {
    private readonly _configService;
    private readonly _connectionString;
    private readonly _jwtSecret;
    private readonly _jwtExpirationTime;
    get connectionString(): string;
    get jwtSecret(): string;
    get expirationTime(): string;
    constructor(_configService: ConfigService);
    private _getConnectionStringFromEnvFile;
    private _getJWTSecretFromEnvFile;
    private _getJWTExpirationTimeFromEnvFile;
}
