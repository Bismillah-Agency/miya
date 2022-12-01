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
import { EncountersService, LocationService } from './encounters.service';
import { CreateEncounterDto } from './dto/create-encounter.dto';
import { UpdateEncounterDto } from './dto/update-encounter.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('api/kemedis/encounters')
@Controller('api/kemedis/encounters')
export class EncountersController {
  private readonly logger = new Logger(EncountersController.name);
  constructor(
    private readonly encountersService: EncountersService,
    private readonly locationService: LocationService,
  ) {}

  // constructor(private readonly LocationService: LocationService) {}

  @Post()
  @ApiOperation({ summary: 'Create Encounter' })
  @ApiResponse({ status: 200, description: 'Create Encounter' })
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
    return this.encountersService.findOne(id);
  }

  @Get('locations')
  async getLocation() {
    const location = await this.locationService.findAll();
    return location;
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
