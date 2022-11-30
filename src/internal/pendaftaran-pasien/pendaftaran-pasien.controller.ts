import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PendaftaranPasienService } from './pendaftaran-pasien.service';
import { CreatePendaftaranPasienDto } from './dto/create-pendaftaran-pasien.dto';
import { UpdatePendaftaranPasienDto } from './dto/update-pendaftaran-pasien.dto';

@Controller('/api/pendaftaran-pasien')
export class PendaftaranPasienController {
  constructor(
    private readonly pendaftaranPasienService: PendaftaranPasienService,
  ) {}

  @Post()
  create(@Body() createPendaftaranPasienDto: CreatePendaftaranPasienDto) {
    return this.pendaftaranPasienService.create(createPendaftaranPasienDto);
  }

  @Get()
  findAll() {
    return this.pendaftaranPasienService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pendaftaranPasienService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePendaftaranPasienDto: UpdatePendaftaranPasienDto,
  ) {
    return this.pendaftaranPasienService.update(
      +id,
      updatePendaftaranPasienDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pendaftaranPasienService.remove(+id);
  }
}
