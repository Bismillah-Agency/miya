import { IntersectionType, OmitType } from '@nestjs/mapped-types';
import { Encounter, Patient } from 'internal/schemas';
import { ApiProperty } from '@nestjs/swagger';
import { type } from 'os';

class PatientInput extends OmitType(Patient, ['education', 'job']) {
  education: string;
  job: string;
}

class PaymentInput extends OmitType(Encounter, ['paymentMethodCode']) {
  paymentMethodCode: string;
}

class AdditionalEncoubterInput {
  locationId: string;
}

export class AddCreateEncounterDto extends OmitType(Encounter, [
  'patient',
  'paymentMethodCode',
]) {
  patient: PatientInput;
  paymentMethodCode: PaymentInput;
}

export class CreateEncounterDto extends IntersectionType(
  AddCreateEncounterDto,
  AdditionalEncoubterInput,
) {}
