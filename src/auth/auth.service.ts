import { Injectable, Logger } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  registerUser(user: CreateUserDto) {
    return this.usersService.create(user);
  }

  validateUser(email: string, pass: string) {
    Logger.debug(`validateUser: ${email} ${pass}`);
    return this.usersService.findByEmail(email).then((user) => {
      if (user && user.password === pass) {
        const { password, ...result } = user;
        return result;
      }
      return null;
    });
  }

  async login(user: User) {
    return {
      access_token: this.jwtService.sign({ username: user.name, sub: user.id }),
    };
  }
}
