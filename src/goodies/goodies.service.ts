import { Injectable } from '@nestjs/common';
import { CreateGoodyDto } from './dto/create-goody.dto';
import { UpdateGoodyDto } from './dto/update-goody.dto';

@Injectable()
export class GoodiesService {
  create(createGoodyDto: CreateGoodyDto) {
    return 'This action adds a new goody';
  }

  findAll() {
    return `This action returns all goodies`;
  }

  findOne(id: number) {
    return `This action returns a #${id} goody`;
  }

  update(id: number, updateGoodyDto: UpdateGoodyDto) {
    return `This action updates a #${id} goody`;
  }

  remove(id: number) {
    return `This action removes a #${id} goody`;
  }
}
