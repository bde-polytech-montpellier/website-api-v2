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
import { GoodiesService } from './goodies.service';
import { CreateGoodieDto } from './dto/create-goodie.dto';
import { UpdateGoodieDto } from './dto/update-goodie.dto';
import { ApiTags } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';

@ApiTags('goodies')
@Controller('goodies')
export class GoodiesController {
  constructor(private readonly goodiesService: GoodiesService) {}

  @Get()
  findAll() {
    return this.goodiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.goodiesService.findOne(id);
  }

  @Post()
  create(@Body(new ValidationPipe()) createGoodyDto: CreateGoodieDto) {
    Logger.log(`Creating goody with data: ${JSON.stringify(createGoodyDto)}`);
    return this.goodiesService.create(createGoodyDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body(new ValidationPipe()) updateGoodyDto: UpdateGoodieDto,
  ) {
    Logger.log(`Updating goody with data: ${JSON.stringify(updateGoodyDto)}`);
    return this.goodiesService.update(id, updateGoodyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    Logger.log(`Deleting goody with id: ${id}`);
    return this.goodiesService.remove(id);
  }
}
