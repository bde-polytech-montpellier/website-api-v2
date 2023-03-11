import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createUserInput: Prisma.UserCreateInput) {
    return this.prismaService.user.create({ data: createUserInput });
  }

  findAll() {
    return this.prismaService.user.findMany();
  }

  findOne(id: string) {
    return this.prismaService.user.findUnique({ where: { id } });
  }

  findByName(name: string) {
    return this.prismaService.user.findMany({ where: { name } });
  }

  findByEmail(email: string) {
    return this.prismaService.user.findUnique({ where: { email } });
  }

  findOneWithRole(id: string) {
    return this.prismaService.user.findUnique({
      where: { id },
      include: { role: true },
    });
  }

  update(id: string, updateUserInput: Prisma.UserUpdateInput) {
    return this.prismaService.user.update({
      where: { id },
      data: updateUserInput,
    });
  }

  remove(id: string) {
    return this.prismaService.user.delete({ where: { id } });
  }
}
