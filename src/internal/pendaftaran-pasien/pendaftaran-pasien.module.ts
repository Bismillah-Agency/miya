import { Module } from '@nestjs/common';
import { PendaftaranPasienService } from './pendaftaran-pasien.service';
import { PendaftaranPasienController } from './pendaftaran-pasien.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PendaftaranPasienSchema } from './schemas/pendaftaran-pasien.schemas';

@Module({
  controllers: [PendaftaranPasienController],
  providers: [PendaftaranPasienService],
  imports: [
    MongooseModule.forFeature([
      {
        name: 'PendaftaranPasien',
        schema: PendaftaranPasienSchema,
      },
    ]),
  ],
})
export class PendaftaranPasienModule {}
