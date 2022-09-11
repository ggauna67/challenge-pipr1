import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './auth.strategy';
import { UsersModule } from 'src/users/users.module';
import { JwtService } from '@nestjs/jwt';
import { ConfigurationNestService } from 'src/common/configuration/configuration.service';
import { ConfigurationNestModule } from 'src/common/configuration/configuration.module';
import { JwtModule } from '@nestjs/jwt';


@Module({
  imports: [
    UsersModule,
    ConfigurationNestModule,
    JwtModule.register({
      secret: 'C0D1G0SUP3RS3CR3T0P4R4JWT',
      signOptions: { expiresIn: '1h'}
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, JwtService]
})
export class AuthModule {}
