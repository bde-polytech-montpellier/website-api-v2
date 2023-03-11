import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { AuthService } from './auth.service';
import { User } from '@prisma/client';
import { LocalStrategy } from './guards/local.strategy';
import { JwtStrategy } from './guards/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '../users/users.module';
import prismaMock from '../test/client';

const mockCreateUserDto: CreateUserDto = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  password: 'azerty',
};
const mockUser: User = {
  id: '1',
  role_id: 1,
  ...mockCreateUserDto,
};

describe('AuthController', () => {
  let module: TestingModule;
  let controller: AuthController;
  let service: AuthService;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [
        UsersModule,
        PassportModule,
        ConfigModule.forRoot({ isGlobal: true }),
        JwtModule.register({
          secret: process.env.SECRET,
          signOptions: { expiresIn: '7d' },
        }),
      ],
      controllers: [AuthController],
      providers: [AuthService, LocalStrategy, JwtStrategy],
    }).compile();

    controller = module.get<AuthController>(AuthController);
    service = module.get<AuthService>(AuthService);
  });

  afterAll(async () => {
    await module.close();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return an access_token upon signup', async () => {
    jest
      .spyOn(service, 'registerUser')
      .mockResolvedValue(prismaMock.user.create({ data: mockUser }));

    expect(controller.signup(mockCreateUserDto)).resolves.toHaveProperty(
      'access_token',
    );
  });

  it('should return an access_token upon login', async () => {
    // TODO
  });

  it('should fail to login with wrong credentials', async () => {
    // TODO
  });
});
