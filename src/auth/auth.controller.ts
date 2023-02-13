import {
  Controller,
  Post,
  UseGuards,
  Request,
  UsePipes,
  ValidationPipe,
  Body,
} from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.gard';
import { CreateUserDto } from '../users/dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';
import { User } from '@prisma/client';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  @UsePipes(ValidationPipe)
  signup(@Body(new ValidationPipe()) createUserDto: CreateUserDto) {
    return bcrypt
      .hash(createUserDto.password, 10)
      .then((hash: string) =>
        this.authService.registerUser({
          ...createUserDto,
          password: hash,
        }),
      )
      .then((user: User) => this.authService.login(user));
  }

  @UseGuards(LocalAuthGuard)
  @Post('signin')
  async login(@Request() req: any) {
    return req.user;
  }
}
