import { Injectable } from '@nestjs/common';
import { CreatePartnerDto } from './dto/create-partner.dto';
import { UpdatePartnerDto } from './dto/update-partner.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PartnersService {
  constructor(private readonly prisma: PrismaService) {}

  create(createPartnerDto: CreatePartnerDto) {
    return this.prisma.partner.create({ data: createPartnerDto });
  }

  findAll() {
    return this.prisma.partner.findMany();
  }

  findOne(id: string) {
    return this.prisma.partner.findUnique({ where: { id } });
  }

  update(id: string, updatePartnerDto: UpdatePartnerDto) {
    return this.prisma.partner.update({
      where: { id },
      data: updatePartnerDto,
    });
  }

  remove(id: string) {
    return this.prisma.partner.delete({ where: { id } });
  }
}
