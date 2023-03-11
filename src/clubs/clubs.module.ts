import { PrismaModule } from './../prisma/prisma.module';
import { JwtService } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { ClubsService } from './clubs.service';
import { ClubsController } from './clubs.controller';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from '../roles/roles.guard';
import { UsersModule } from '../users/users.module';
import { JwtStrategy } from '../auth/guards/jwt.strategy';
import { AuthService } from '../auth/auth.service';

@Module({
  imports: [PrismaModule, UsersModule],
  controllers: [ClubsController],
  providers: [
    ClubsService,
    JwtStrategy,
    AuthService,
    JwtService,
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class ClubsModule {}
