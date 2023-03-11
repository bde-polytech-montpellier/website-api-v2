import { Test, TestingModule } from '@nestjs/testing';
import { ClubsController } from './clubs.controller';
import { ClubsService } from './clubs.service';
import { APP_GUARD } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from '../auth/auth.service';
import { JwtStrategy } from '../auth/guards/jwt.strategy';
import { PrismaModule } from '../prisma/prisma.module';
import { RolesGuard } from '../roles/roles.guard';
import { UsersModule } from '../users/users.module';

describe('ClubsController', () => {
  let controller: ClubsController;

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

    controller = module.get<ClubsController>(ClubsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
