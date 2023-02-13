import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(email: string, password: string): Promise<any> {
    Logger.debug(`Validating user ${email}, ${password}`);
    const user = await this.authService.validateUser(email, password);
    if (!user) {
      throw new NotFoundException();
    }
    return user;
  }
}
