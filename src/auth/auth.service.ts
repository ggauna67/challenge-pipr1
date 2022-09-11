import { HttpException, Injectable } from '@nestjs/common';
import { LoginAuthDto } from './dto/login-user.dto';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigurationNestService } from 'src/common/configuration/configuration.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
    private configService: ConfigurationNestService
  ) {
  }

  async login(authObject: LoginAuthDto){
    const { username, password } = authObject;

    const userFound = await await this.userService.findOne(username);;

    if (!userFound) throw new HttpException('User not found',404);

    if (!(password === userFound.password)){
        throw new HttpException('Wrong password',401);
    }

    const expirationTime = this.configService.expirationTime;

    const payload = { user: username, roles: userFound.roles}
    const token = await this.jwtService.sign(payload,
      {secret: 'C0D1G0SUP3RS3CR3T0P4R4JWT',
       expiresIn: '1h'})

    const data = {
      user: username,
      token: token,
      expirationTime: expirationTime,
    }
    return data;
  }
}
