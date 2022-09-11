import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/login-user.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginUserDto: LoginAuthDto): Promise<{
        user: string;
        token: string;
        expirationTime: string;
    }>;
}
