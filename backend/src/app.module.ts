import { ConfigurationModule } from './config/app.config';
import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';
// import { typeORMConfig } from './config/typeorm.config';
import { AuthModule } from './auth/auth.module';

@Module({
  // imports: [BoardsModule, TypeOrmModule.forRoot(typeORMConfig)],
  // 루트경로의 ormconfig.json 또는 ormconfig.js 에서 root 설정한 경우 => forRoot() 호출 시 자동 추적
  imports: [ConfigurationModule, BoardsModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
