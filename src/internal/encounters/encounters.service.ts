import { Injectable } from '@nestjs/common';
import { CreateEncounterDto } from './dto/create-encounter.dto';
import { UpdateEncounterDto } from './dto/update-encounter.dto';

@Injectable()
export class EncountersService {
  create(createEncounterDto: CreateEncounterDto) {
    return 'This action adds a new encounter';
  }

  findAll() {
    return `This action returns all encounters`;
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
