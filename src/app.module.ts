import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigurationService } from './config/config.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(ConfigurationService.getTypeOrmConfig())
  ],
})
export class AppModule { }