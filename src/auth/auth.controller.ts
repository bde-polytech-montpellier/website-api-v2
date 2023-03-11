import {
  Controller,
  Post,
  Request,
  Body,
  UsePipes,
  ValidationPipe,
  UseGuards,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.gard';
import { ApiTags } from '@nestjs/swagger';
import { User } from '@prisma/client';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  @UsePipes(ValidationPipe)
  signup(@Body(new ValidationPipe()) createUserDto: CreateUserDto): {
    access_token: string;
  } {
    const password = createUserDto.password;

    return bcrypt
      .hash(password, 10)
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
  login(@Request() req: any) {
    return this.authService.login(req.user);
  }
}
