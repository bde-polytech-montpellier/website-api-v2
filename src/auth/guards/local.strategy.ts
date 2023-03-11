import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, NotFoundException, Logger } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { UserNotFoundError } from '../constants';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'email' });
  }

  async validate(email: string, password: string): Promise<any> {
    Logger.debug(`Validating user ${email}, ${password}`);
    const user = await this.authService.validateUser(email, password);
    if (!user) {
      throw new NotFoundException(UserNotFoundError);
    }
    return user;
  }
}
