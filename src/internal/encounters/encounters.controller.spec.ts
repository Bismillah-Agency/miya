import { Test, TestingModule } from '@nestjs/testing';
import { EncountersController } from './encounters.controller';
import { EncountersService } from './encounters.service';

describe('EncountersController', () => {
  let controller: EncountersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EncountersController],
      providers: [EncountersService],
    }).compile();

    controller = module.get<EncountersController>(EncountersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
