import { User } from './user.entity';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserRepository } from './user.repository';
import * as config from 'config';

// injectable 사용 이유 => jwt-strategy 주입하여 사용하기 위함
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  // PassportStrategy 상속하여 @nestjs/passport 패키지 정의
  // PassportStrategy 인자 Strategy => passport-jwt 정의
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {
    super({
      secretOrKey: process.env.JWT_SECRET || config.get('jwt.secret'),
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate(payload) {
    const { username } = payload;
    const user: User = await this.userRepository.findOne({ username });
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
