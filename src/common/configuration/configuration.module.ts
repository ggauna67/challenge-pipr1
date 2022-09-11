import { ConfigurationNestService } from "./configuration.service";
import { ConfigModule } from "@nestjs/config";
import { Module } from "@nestjs/common";

@Module({
  exports: [ConfigurationNestService],
  imports: [ConfigModule.forRoot()],
  providers: [ConfigurationNestService]
})
export class ConfigurationNestModule {}