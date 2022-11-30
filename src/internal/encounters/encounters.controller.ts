import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
  UsePipes,
  Logger,
} from '@nestjs/common';
import { EncountersService } from './encounters.service';
import { CreateEncounterDto } from './dto/create-encounter.dto';
import { UpdateEncounterDto } from './dto/update-encounter.dto';

@Controller('api/miya/encounters')
export class EncountersController {
  private readonly logger = new Logger(EncountersController.name);
  constructor(private readonly encountersService: EncountersService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  create(@Body() createEncounterDto: CreateEncounterDto) {
    this.logger.log(
      'createEncounterDto: ' + JSON.stringify(createEncounterDto),
    );
    return this.encountersService.create(createEncounterDto);
  }

  @Get()
  async findAll() {
    const encounters = await this.encountersService.findAll();
    return encounters;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.encountersService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEncounterDto: UpdateEncounterDto,
  ) {
    return this.encountersService.update(+id, updateEncounterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.encountersService.remove(+id);
  }
}
