import { Test, TestingModule } from '@nestjs/testing';
import { DiscsController } from './discs.controller';

describe('DiscsController', () => {
  let controller: DiscsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DiscsController],
    }).compile();

    controller = module.get<DiscsController>(DiscsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
