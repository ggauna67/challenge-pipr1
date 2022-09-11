import { ConfigService } from "@nestjs/config";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ConfigurationNestService {
  private readonly _connectionString!: string;
  private readonly _jwtSecret!: string;
  private readonly _jwtExpirationTime!: string;
  
  get connectionString(): string {
    return this._getConnectionStringFromEnvFile();
  }

  get jwtSecret(): string {
    return this._getJWTSecretFromEnvFile();
  }

  get expirationTime(): string {
    return this._getJWTExpirationTimeFromEnvFile();
  }
  
  constructor(private readonly _configService: ConfigService) {
    this._connectionString = this._getConnectionStringFromEnvFile();
    this._jwtSecret = this._getJWTSecretFromEnvFile();
    this._jwtExpirationTime = this._getJWTExpirationTimeFromEnvFile();
  }

  private _getConnectionStringFromEnvFile(): string {
    const connectionString = this._configService.get<string>('MONGODB_DB_URI');
    if (!connectionString) {
      throw new Error('No connection string has been provided in the .env file.');
    }

    return connectionString;
  }

  private _getJWTSecretFromEnvFile(): string {
    const jwtSecret = this._configService.get<string>('JWT_SECRET');
    if (!jwtSecret) {
      throw new Error('No JWT Secret provided in the .env file.');
    }

    return jwtSecret;
  }

  private _getJWTExpirationTimeFromEnvFile(): string {
    const jwtExpirationTime = this._configService.get<string>('JWT_EXPIRATIONTIME');
    if (!jwtExpirationTime) {
      throw new Error('No JWT Expiration time provided in the .env file.');
    }

    return jwtExpirationTime;
  }
}