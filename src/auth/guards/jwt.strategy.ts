import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, NotFoundException } from '@nestjs/common';
import { TokenPayloadDto } from '../dto/token-payload.dto';
import { AuthService } from '../auth.service';
import { UserNotFoundError } from '../constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.SECRET,
    });
  }

  async validate(payload: TokenPayloadDto) {
    const user = await this.authService.findUserById(payload.sub);

    if (!user) throw new NotFoundException(UserNotFoundError);

    return {
      sub: payload.sub,
      name: user.name,
      email: user.email,
      role_name: user.role.name,
    } as TokenPayloadDto;
  }
}
