import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigurationNestModule } from './common/configuration/configuration.module';
import { ConfigurationNestService } from './common/configuration/configuration.service';
import { JwtModule } from '@nestjs/jwt';
import { CompanyModule } from './company/company.module';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigurationNestModule],
      inject: [ConfigurationNestService],
      useFactory: (appConfigService: ConfigurationNestService) => {
        const options: MongooseModuleOptions = {
          uri: appConfigService.connectionString,
          useNewUrlParser: true,
          useUnifiedTopology: true,
        };
        return options;
      },
    }),
    UsersModule,
    CompanyModule,
    AuthModule,
    JwtModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
