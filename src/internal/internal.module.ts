import { Module } from '@nestjs/common';

import { PendaftaranPasienModule } from './pendaftaran-pasien/pendaftaran-pasien.module';
import { EncountersModule } from './encounters/encounters.module';

@Module({
  imports: [PendaftaranPasienModule, EncountersModule],
})
export class InternalModule {}
