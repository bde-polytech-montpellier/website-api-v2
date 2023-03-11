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
import { ClubsService } from './clubs.service';
import { CreateClubDto } from './dto/create-club.dto';
import { UpdateClubDto } from './dto/update-club.dto';
import { ApiTags } from '@nestjs/swagger';
import { Role } from '../roles/roles.enum';
import { Roles } from '../roles/roles.decorator';
import { Logger } from '@nestjs/common';

@ApiTags('clubs')
@Controller('clubs')
export class ClubsController {
  constructor(private readonly clubsService: ClubsService) {}

  @Get()
  findAll() {
    return this.clubsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clubsService.findOne(id);
  }

  @Post()
  @Roles(Role.Admin)
  async create(@Body(new ValidationPipe()) data: CreateClubDto) {
    Logger.log(`Creating club with data: ${JSON.stringify(data)}`);
    return this.clubsService.create(data);
  }

  @Patch(':id/activate')
  @Roles(Role.Admin)
  activate(@Param('id') id: string) {
    Logger.log(`Activating club ${id}`);
    return this.clubsService.activate(id);
  }

  @Patch(':id/deactivate')
  @Roles(Role.Admin)
  deactivate(@Param('id') id: string) {
    Logger.log(`Deactivating club ${id}`);
    return this.clubsService.deactivate(id);
  }

  @Patch(':id')
  @Roles(Role.Admin)
  async update(
    @Param('id') id: string,
    @Body(new ValidationPipe()) data: UpdateClubDto,
  ) {
    Logger.log(`Updating club ${id} with data: ${JSON.stringify(data)}`);
    return this.clubsService.update(id, data);
  }

  @Delete(':id')
  @Roles(Role.Admin)
  remove(@Param('id') id: string) {
    Logger.log(`Deleting club ${id}`);
    return this.clubsService.remove(id);
  }
}
