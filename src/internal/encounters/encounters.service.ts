import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Encounter, Location, Job } from 'internal/schemas';
import { Model } from 'mongoose';
import { CreateEncounterDto } from './dto/create-encounter.dto';
import { UpdateEncounterDto } from './dto/update-encounter.dto';
import { EncounterrDocument } from './schemas/encounter.schemas';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class LocationService {
  private readonly logger = new Logger(LocationService.name);
  constructor(private readonly httpService: HttpService) {}

  async findAll(): Promise<Location[]> {
    return await this.httpService
      .get('/locations')
      .toPromise()
      .then((response) => response.data);
  }

  async findByLocationId(locationId: string): Promise<Location> {
    this.logger.log('locationId: ' + locationId);
    return await this.httpService
      .get(`/locations/id/${locationId}`)
      .toPromise()
      .then((response) => {
        this.logger.log('response.data: ' + JSON.stringify(response.data));
        return response.data;
      });
  }
}

@Injectable()
export class JobService {
  private readonly logger = new Logger(JobService.name);
  constructor(private readonly httpService: HttpService) {}

  async findByJobId(jobId: string): Promise<Job> {
    this.logger.log('jobId: ' + jobId);
    return await this.httpService
      .get(`/jobs/${jobId}`)
      .toPromise()
      .then((response) => {
        this.logger.log('response.data: ' + JSON.stringify(response.data));
        return response.data;
      });
  }
}

@Injectable()
export class EncountersService {
  constructor(
    @InjectModel(Encounter.name)
    private encounterModel: Model<EncounterrDocument>,
    private locationService: LocationService,
    private jobService: JobService,
  ) {}

  async create(createEncounterDto: CreateEncounterDto) {
    const locationId = createEncounterDto.locationId;

    const location = await this.locationService.findByLocationId(locationId);
    console.log('locationnnnnnnnnn: ' + JSON.stringify(location));

    const job = await this.jobService.findByJobId(
      createEncounterDto.patient.job,
    );

    const encounter = new this.encounterModel({
      ...createEncounterDto,
      patient: {
        ...createEncounterDto.patient,
        education: {
          eduLevelName: createEncounterDto.patient.education,
        },
        job: job,
      },
      location: location,
      encounterStatus: {
        code: 'ARRIVED',
        name: 'ARRIVED',
        description: 'ARRIVED',
      },
      // paymentMethodCode :
    });

    return encounter.save();
  }

  async findAll() {
    return await this.encounterModel.find().exec();
  }

  findOne(id: string) {
    return this.encounterModel.findById(id).exec();
  }

  update(id: number, updateEncounterDto: UpdateEncounterDto) {
    return `This action updates a #${id} encounter`;
  }

  remove(id: number) {
    return `This action removes a #${id} encounter`;
  }
}
