import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EncountersService } from './encounters.service';
import { CreateEncounterDto } from './dto/create-encounter.dto';
import { UpdateEncounterDto } from './dto/update-encounter.dto';

@Controller('encounters')
export class EncountersController {
  constructor(private readonly encountersService: EncountersService) {}

  @Post()
  create(@Body() createEncounterDto: CreateEncounterDto) {
    return this.encountersService.create(createEncounterDto);
  }

  @Get()
  findAll() {
    return this.encountersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.encountersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEncounterDto: UpdateEncounterDto) {
    return this.encountersService.update(+id, updateEncounterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.encountersService.remove(+id);
  }
}
