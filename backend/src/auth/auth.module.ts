import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: {
        expiresIn: 60 * 60,
      },
    }),
    TypeOrmModule.forFeature([UserRepository]),
  ],
  // Providers => auth module 안에서 사용하기 위함.
  providers: [AuthService, JwtStrategy],
  // Exports => auth module 외의 모듈에서 사용하기 위함
  exports: [JwtStrategy, PassportModule],
  controllers: [AuthController],
})
export class AuthModule {}
