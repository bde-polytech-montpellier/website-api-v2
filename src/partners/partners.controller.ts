import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
} from '@nestjs/common';
import { PartnersService } from './partners.service';
import { CreatePartnerDto } from './dto/create-partner.dto';
import { UpdatePartnerDto } from './dto/update-partner.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('partners')
@Controller('partners')
export class PartnersController {
  constructor(private readonly partnersService: PartnersService) {}

  @Get()
  findAll() {
    return this.partnersService.findAll();
  }

  @Post()
  create(@Body(new ValidationPipe()) createPartnerDto: CreatePartnerDto) {
    return this.partnersService.create(createPartnerDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.partnersService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body(new ValidationPipe()) updatePartnerDto: UpdatePartnerDto,
  ) {
    return this.partnersService.update(+id, updatePartnerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.partnersService.remove(+id);
  }
}
