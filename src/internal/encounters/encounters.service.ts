import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Encounter, Location } from 'internal/schemas';
import { Model } from 'mongoose';
import { CreateEncounterDto } from './dto/create-encounter.dto';
import { UpdateEncounterDto } from './dto/update-encounter.dto';
import { EncounterrDocument } from './schemas/encounter.schemas';
import { AxiosResponse } from 'axios';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';

@Injectable()
export class EncountersService {
  constructor(
    @InjectModel(Encounter.name)
    private encounterModel: Model<EncounterrDocument>,
  ) {}

  create(createEncounterDto: CreateEncounterDto) {
    const encounter = new this.encounterModel({
      ...createEncounterDto,
      patient: {
        ...createEncounterDto.patient,
        education: {
          eduLevelName: createEncounterDto.patient.education,
        },
        job: {
          jobName: createEncounterDto.patient.job,
        },
      },
      location: {
        ...createEncounterDto.location,
        locationId: createEncounterDto.locationId,
      },
    });

    return encounter.save();
  }

  async findAll() {
    return await this.encounterModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} encounter`;
  }

  update(id: number, updateEncounterDto: UpdateEncounterDto) {
    return `This action updates a #${id} encounter`;
  }

  remove(id: number) {
    return `This action removes a #${id} encounter`;
  }
}

@Injectable()
export class LocationService {
  constructor(private readonly httpService: HttpService) {}

  async findAll(): Promise<Location[]> {
    return await this.httpService
      .get('/locations')
      .toPromise()
      .then((response) => response.data);
  }

  async findByLocationId(locationId: number): Promise<Location> {
    return await this.httpService
      .get(`/locations/${locationId}`)
      .toPromise()
      .then((response) => response.data);
  }
}
