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
import { CreateGoodyDto } from './dto/create-goody.dto';
import { UpdateGoodyDto } from './dto/update-goody.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('goodies')
@Controller('goodies')
export class GoodiesController {
  constructor(private readonly goodiesService: GoodiesService) {}

  @Post()
  create(@Body(new ValidationPipe()) createGoodyDto: CreateGoodyDto) {
    return this.goodiesService.create(createGoodyDto);
  }

  @Get()
  findAll() {
    return this.goodiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.goodiesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body(new ValidationPipe()) updateGoodyDto: UpdateGoodyDto,
  ) {
    return this.goodiesService.update(+id, updateGoodyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.goodiesService.remove(+id);
  }
}
