import { Module } from '@nestjs/common';
import { GoodiesService } from './goodies.service';
import { GoodiesController } from './goodies.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [GoodiesController],
  providers: [GoodiesService],
})
export class GoodiesModule {}
