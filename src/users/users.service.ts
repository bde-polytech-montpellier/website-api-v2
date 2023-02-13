import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createUserDto: Prisma.UserCreateInput) {
    return this.prismaService.user.create({
      data: createUserDto,
    });
  }

  findAll() {
    return this.prismaService.user.findMany();
  }

  findOne(id: string) {
    return this.prismaService.user.findUnique({
      where: {
        id,
      },
    });
  }

  findByName(name: string) {
    return this.prismaService.user.findMany({
      where: {
        name,
      },
    });
  }

  findByEmail(email: string) {
    return this.prismaService.user.findUnique({
      where: {
        email,
      },
    });
  }

  update(id: string, updateUserDto: Prisma.UserUpdateInput) {
    return this.prismaService.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
