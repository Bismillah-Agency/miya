import { Module } from '@nestjs/common';
import { EncountersService } from './encounters.service';
import { EncountersController } from './encounters.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { EncounterSchema } from './schemas/encounter.schemas';
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers: [EncountersController],
  providers: [EncountersService],
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Encounter',
        schema: EncounterSchema,
      },
    ]),
    HttpModule.registerAsync({
      useFactory: () => ({
        baseURL: 'http://localhost:3000',
        timeout: 5000,
        maxRedirects: 5,
      }),
    }),
  ],
})
export class EncountersModule {}
