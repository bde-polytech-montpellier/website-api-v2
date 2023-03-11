import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { TokenPayloadDto } from './dto/token-payload.dto';
import { User } from '@prisma/client';
import { LoginValidatedDto } from './dto/login-validated.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  findUserById(id: string) {
    return this.usersService.findOneWithRole(id);
  }

  registerUser(user: CreateUserDto) {
    return this.usersService.create(user);
  }

  async validateUser(email: string, pwd: string) {
    const user = await this.usersService.findByEmail(email);
    if (!user) return null;

    const res = await bcrypt.compare(pwd, user.password);
    if (res) return { id: user.id, username: user.name, email: user.email };
    else return null;
  }

  // TODO: refactor this method to avoid the double query (findOneWithRole called twice in login and JwtStrategy)
  async login(user: User) {
    const userWithRole = await this.usersService.findOneWithRole(user.id);
    if (!userWithRole) throw new BadRequestException('User not found');

    const payload: TokenPayloadDto = {
      sub: userWithRole.id,
      name: userWithRole.name,
      email: userWithRole.email,
      role_id: userWithRole.role.id,
      role_name: userWithRole.role.name,
    };

    Logger.debug(`Generated JWT payload: ${JSON.stringify(payload)}`);
    Logger.debug({
      id: userWithRole.id,
      name: userWithRole.name,
      email: userWithRole.email,
      role: userWithRole.role,
      access_token: this.jwtService.sign(payload),
    });

    return {
      id: userWithRole.id,
      name: userWithRole.name,
      email: userWithRole.email,
      role: userWithRole.role,
      access_token: this.jwtService.sign(payload),
    } as LoginValidatedDto;
  }
}
