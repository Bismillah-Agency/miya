import { Module } from '@nestjs/common';
import {
  EncountersService,
  LocationService,
  JobService,
} from './encounters.service';
import { EncountersController } from './encounters.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { EncounterSchema } from './schemas/encounter.schemas';
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers: [EncountersController],
  providers: [EncountersService, LocationService, JobService],
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Encounter',
        schema: EncounterSchema,
      },
    ]),
    HttpModule.registerAsync({
      useFactory: () => ({
        baseURL: 'http://api.kemedik.com/api/kemedis',
        timeout: 5000,
        maxRedirects: 5,
      }),
    }),
  ],
})
export class EncountersModule {}
