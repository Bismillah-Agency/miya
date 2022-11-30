import { Prop, Schema } from '@nestjs/mongoose';
import { Code, Address } from './index';

@Schema()
export class EncounterClass extends Code {}

@Schema()
export class EncounterClassHistory {
  @Prop(Code)
  encounterClass: Code;

  @Prop()
  id: number;
}

@Schema()
export class EncounterStatusHistories {
  @Prop(Code)
  encounterStatus: Code;

  @Prop()
  id: number;
}

@Schema()
export class HoursOfOperation {
  @Prop()
  allDay: string;

  @Prop()
  closingTime: string;

  @Prop()
  daysOfWeek: string;

  @Prop()
  openingTime: string;
}

@Schema()
export class PracticeSchedule {
  @Prop()
  allDay: string;

  @Prop()
  closingTime: string;

  @Prop()
  daysOfWeek: string;

  @Prop()
  openingTime: string;
}

@Schema()
export class Position {
  @Prop()
  altitude: number;

  @Prop()
  latitude: number;

  @Prop()
  longitude: number;
}

@Schema()
export class Telecom {
  @Prop()
  email: string;
  @Prop()
  fax: string;
  @Prop()
  other: string;
  @Prop()
  pager: string;
  @Prop()
  phone: string;
  @Prop()
  sms: string;
  @Prop()
  url: string;
}

@Schema()
export class Location {
  @Prop(Address)
  address: Address;

  @Prop()
  availabilityExceptions: string;

  @Prop([HoursOfOperation])
  hoursOfOperations: HoursOfOperation;

  @Prop()
  locationAlias: string;

  @Prop()
  locationDescription: string;

  @Prop()
  locationId: string;

  @Prop()
  locationMode: string;

  @Prop()
  locationName: string;

  @Prop()
  locationStatus: string;

  @Prop()
  locationType: string;

  @Prop()
  parent: string;

  @Prop()
  operationalStatus: string;

  @Prop()
  physicalTypeCode: string;

  @Prop()
  resId: string;

  @Prop(Telecom)
  telecom: Telecom;
}

@Schema()
export class Contact {
  @Prop(Address)
  address: Address;
  @Prop()
  contactName: string;
  @Prop()
  gender: string;
  @Prop()
  relationship: string;
  @Prop(Telecom)
  telecom: Telecom;
}

@Schema()
export class Education {
  @Prop()
  description: string;

  @Prop()
  eduLevelName: string;

  @Prop()
  id: string;
}

@Schema()
export class Job {
  @Prop()
  description: string;

  @Prop()
  id: string;

  @Prop()
  jobName: string;
}

@Schema()
export class Patient {
  @Prop([Address])
  addressDets: Address;

  @Prop()
  babyName: string;

  @Prop()
  birthDate: string;

  @Prop()
  birthPlace: string;

  @Prop(Contact)
  contact: Contact;

  @Prop(Education)
  education: Education;

  @Prop()
  firstName: string;

  @Prop()
  gender: string;

  @Prop()
  idNumber: string;

  @Prop()
  idType: string;

  @Prop(Job)
  job: Job;

  @Prop()
  lastName: string;

  @Prop()
  maritalStatus: string;

  @Prop()
  motherName: string;

  @Prop()
  religion: string;

  @Prop(Telecom)
  telecom: Telecom;
}

@Schema()
export class Practitioner {
  @Prop([Address])
  addressDets: Address;

  @Prop()
  birthDate: string;

  @Prop()
  gender: string;

  @Prop()
  name: string;

  @Prop()
  nik: string;

  @Prop([PracticeSchedule])
  practiceSchedules: PracticeSchedule;

  //   practitionerId	string
  // practitionerSpecialty	string
  // practitionerTypeCode	string

  @Prop()
  practitionerId: string;

  @Prop()
  practitionerSpecialty: string;

  @Prop()
  practitionerTypeCode: string;

  @Prop()
  resId: string;

  @Prop(Telecom)
  telecom: Telecom;
}

@Schema()
export class Encounter {
  @Prop()
  encounterCLass: Code;

  @Prop([EncounterClassHistory])
  encounterClassHistories: EncounterClassHistory[];

  @Prop([Code])
  encounterStatus: Code;

  @Prop([EncounterStatusHistories])
  encounterStatusHistories: EncounterStatusHistories[];

  @Prop([Code])
  encounterType: Code;

  @Prop()
  escortName: string;

  @Prop()
  escortPhoneNumber: string;

  @Prop()
  id: string;

  @Prop(Location)
  location: Location;

  @Prop([Code])
  participantType: Code;

  @Prop(Patient)
  patient: Patient;

  @Prop()
  paymentAccountNumber: string;

  @Prop()
  paymentMethodCode: string;

  @Prop(Practitioner)
  practitioner: Practitioner;

  @Prop()
  queueNo: string;

  @Prop()
  resId: string;

  @Prop([Code])
  serviceType: Code;
}
