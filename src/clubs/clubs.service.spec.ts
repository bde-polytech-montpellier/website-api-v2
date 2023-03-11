import { PrismaModule } from './../prisma/prisma.module';
import { Test, TestingModule } from '@nestjs/testing';
import { ClubsService } from './clubs.service';
import { APP_GUARD } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from '../auth/auth.service';
import { JwtStrategy } from '../auth/guards/jwt.strategy';
import { RolesGuard } from '../roles/roles.guard';
import { UsersModule } from '../users/users.module';
import { ClubsController } from './clubs.controller';

describe('ClubsService', () => {
  let service: ClubsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
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
    }).compile();

    service = module.get<ClubsService>(ClubsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
