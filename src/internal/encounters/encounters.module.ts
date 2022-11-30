import { Module } from '@nestjs/common';
import { EncountersService } from './encounters.service';
import { EncountersController } from './encounters.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { EncounterrSchema } from './schemas/encounter.schemas';

@Module({
  controllers: [EncountersController],
  providers: [EncountersService],
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Encounter',
        schema: EncounterrSchema,
      },
    ]),
  ],
})
export class EncountersModule {}
