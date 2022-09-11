import { LoginAuthDto } from './dto/login-user.dto';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigurationNestService } from 'src/common/configuration/configuration.service';
export declare class AuthService {
    private userService;
    private jwtService;
    private configService;
    constructor(userService: UsersService, jwtService: JwtService, configService: ConfigurationNestService);
    login(authObject: LoginAuthDto): Promise<{
        user: string;
        token: string;
        expirationTime: string;
    }>;
}
