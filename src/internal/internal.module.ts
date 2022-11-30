import { Module } from '@nestjs/common';
import { PatientsModule } from './patients/patients.module';
import { PendaftaranPasienModule } from './pendaftaran-pasien/pendaftaran-pasien.module';

@Module({
  imports: [PatientsModule, PendaftaranPasienModule],
})
export class InternalModule {}
