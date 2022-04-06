import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { typeORMConfig } from './typeorm.config';

// App 전역 configuration
@Module({
  imports: [
    // ConfigModule.forRoot({
    //   isGlobal: true,
    // }),
    TypeOrmModule.forRoot(typeORMConfig),
  ],
})
export class ConfigurationModule {}
