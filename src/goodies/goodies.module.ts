import { Module } from '@nestjs/common';
import { GoodiesService } from './goodies.service';
import { GoodiesController } from './goodies.controller';

@Module({
  controllers: [GoodiesController],
  providers: [GoodiesService]
})
export class GoodiesModule {}
