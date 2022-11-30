import { PartialType } from '@nestjs/mapped-types';
import { CreatePendaftaranPasienDto } from './create-pendaftaran-pasien.dto';

export class UpdatePendaftaranPasienDto extends PartialType(CreatePendaftaranPasienDto) {}
