import { Test, TestingModule } from '@nestjs/testing';
import { GoodiesController } from './goodies.controller';
import { GoodiesService } from './goodies.service';

describe('GoodiesController', () => {
  let controller: GoodiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GoodiesController],
      providers: [GoodiesService],
    }).compile();

    controller = module.get<GoodiesController>(GoodiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
