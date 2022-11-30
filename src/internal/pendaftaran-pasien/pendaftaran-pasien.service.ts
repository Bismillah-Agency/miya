import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  PendaftaranPasien,
  PendaftaranPasienDocument,
} from './schemas/pendaftaran-pasien.schemas';
import { Model } from 'mongoose';
import { CreatePendaftaranPasienDto } from './dto/create-pendaftaran-pasien.dto';
import { UpdatePendaftaranPasienDto } from './dto/update-pendaftaran-pasien.dto';

@Injectable()
export class PendaftaranPasienService {
  constructor(
    @InjectModel(PendaftaranPasien.name)
    private pendaftaranPasienModel: Model<PendaftaranPasienDocument>,
  ) {}

  create(createPendaftaranPasienDto: CreatePendaftaranPasienDto) {
    const createdPendaftaranPasien = new this.pendaftaranPasienModel(
      createPendaftaranPasienDto,
    );

    return createdPendaftaranPasien.save();
  }

  findAll() {
    return `This action returns all pendaftaranPasien`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pendaftaranPasien`;
  }

  update(id: number, updatePendaftaranPasienDto: UpdatePendaftaranPasienDto) {
    return `This action updates a #${id} pendaftaranPasien`;
  }

  remove(id: number) {
    return `This action removes a #${id} pendaftaranPasien`;
  }
}
