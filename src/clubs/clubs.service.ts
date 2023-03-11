import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Injectable()
export class ClubsService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createClubInput: Prisma.ClubCreateInput) {
    return this.prismaService.club.create({ data: createClubInput });
  }

  findAll() {
    return this.prismaService.club.findMany();
  }

  findOne(id: string) {
    return this.prismaService.club.findUnique({ where: { id } });
  }

  update(id: string, updateClubInput: Prisma.ClubUpdateInput) {
    return this.prismaService.club.update({
      where: { id },
      data: updateClubInput,
    });
  }

  activate(id: string) {
    return this.prismaService.club.update({
      where: { id },
      data: { active: true },
    });
  }

  deactivate(id: string) {
    return this.prismaService.club.update({
      where: { id },
      data: { active: false },
    });
  }

  remove(id: string) {
    return this.prismaService.club.delete({ where: { id } });
  }
}
