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
import { Logger } from '@nestjs/common';

@ApiTags('partners')
@Controller('partners')
export class PartnersController {
  constructor(private readonly partnersService: PartnersService) {}

  @Get()
  findAll() {
    return this.partnersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.partnersService.findOne(id);
  }

  @Post()
  create(@Body(new ValidationPipe()) createPartnerDto: CreatePartnerDto) {
    Logger.log(
      `Creating partner with data: ${JSON.stringify(createPartnerDto)}`,
    );
    return this.partnersService.create(createPartnerDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body(new ValidationPipe()) updatePartnerDto: UpdatePartnerDto,
  ) {
    Logger.log(
      `Updating partner with data: ${JSON.stringify(updatePartnerDto)}`,
    );
    return this.partnersService.update(id, updatePartnerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    Logger.log(`Deleting partner with id: ${id}`);
    return this.partnersService.remove(id);
  }
}
