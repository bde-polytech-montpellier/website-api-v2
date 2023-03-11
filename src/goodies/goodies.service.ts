import { Injectable } from '@nestjs/common';
import { CreateGoodieDto } from './dto/create-goodie.dto';
import { UpdateGoodieDto } from './dto/update-goodie.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class GoodiesService {
  constructor(private readonly prisma: PrismaService) {}
  create(createGoodieDto: CreateGoodieDto) {
    return this.prisma.goodie.create({ data: createGoodieDto });
  }

  findAll() {
    return this.prisma.goodie.findMany();
  }

  findOne(id: string) {
    return this.prisma.goodie.findUnique({ where: { id } });
  }

  update(id: string, updateGoodyDto: UpdateGoodieDto) {
    return this.prisma.goodie.update({
      where: { id },
      data: updateGoodyDto,
    });
  }

  remove(id: string) {
    return this.prisma.goodie.delete({ where: { id } });
  }
}
