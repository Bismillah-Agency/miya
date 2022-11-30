import { IntersectionType, OmitType } from '@nestjs/mapped-types';
import { Encounter, Patient } from 'internal/schemas';

class PatientInput extends OmitType(Patient, ['education', 'job']) {
  education: string;
  job: string;
}

class AdditionalEncoubterInput {
  locationId: string;
}

export class AddCreateEncounterDto extends OmitType(Encounter, ['patient']) {
  patient: PatientInput;
}

export class CreateEncounterDto extends IntersectionType(
  AddCreateEncounterDto,
  AdditionalEncoubterInput,
) {}
