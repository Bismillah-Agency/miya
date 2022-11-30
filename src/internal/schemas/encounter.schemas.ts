import { Prop, Schema } from '@nestjs/mongoose';
import { Code, Address } from './index';

@Schema()
export class EncounterClassHistory {
  @Prop(Code)
  encounterClass: Code;

  @Prop({
    default: null,
  })
  id: number;
}

@Schema()
export class EncounterStatusHistories {
  @Prop(Code)
  encounterStatus: Code;

  @Prop({
    default: null,
  })
  id: number;
}

@Schema()
export class HoursOfOperation {
  @Prop({
    default: null,
  })
  allDay: string;

  @Prop({
    default: null,
  })
  closingTime: string;

  @Prop({
    default: null,
  })
  daysOfWeek: string;

  @Prop({
    default: null,
  })
  openingTime: string;
}

@Schema()
export class PracticeSchedule {
  @Prop({
    default: null,
  })
  allDay: string;

  @Prop({
    default: null,
  })
  closingTime: string;

  @Prop({
    default: null,
  })
  daysOfWeek: string;

  @Prop({
    default: null,
  })
  openingTime: string;
}

@Schema()
export class Position {
  @Prop({
    default: null,
  })
  altitude: number;

  @Prop({
    default: null,
  })
  latitude: number;

  @Prop({
    default: null,
  })
  longitude: number;
}

@Schema()
export class Telecom {
  @Prop({
    default: null,
  })
  email: string;
  @Prop({
    default: null,
  })
  fax: string;
  @Prop({
    default: null,
  })
  other: string;
  @Prop({
    default: null,
  })
  pager: string;
  @Prop({
    default: null,
  })
  phone: string;
  @Prop({
    default: null,
  })
  sms: string;
  @Prop({
    default: null,
  })
  url: string;
}

@Schema()
export class Location {
  @Prop(Address)
  address: Address;

  @Prop({
    default: null,
  })
  availabilityExceptions: string;

  @Prop([HoursOfOperation])
  hoursOfOperations: HoursOfOperation;

  @Prop({
    default: null,
  })
  locationAlias: string;

  @Prop({
    default: null,
  })
  locationDescription: string;

  @Prop({
    default: null,
  })
  locationId: string;

  @Prop({
    default: null,
  })
  locationMode: string;

  @Prop({
    default: null,
  })
  locationName: string;

  @Prop({
    default: null,
  })
  locationStatus: string;

  @Prop({
    default: null,
  })
  locationType: string;

  @Prop({
    default: null,
  })
  parent: string;

  @Prop({
    default: null,
  })
  operationalStatus: string;

  @Prop({
    default: null,
  })
  physicalTypeCode: string;

  @Prop({
    default: null,
  })
  resId: string;

  @Prop(Telecom)
  telecom: Telecom;
}

@Schema()
export class Contact {
  @Prop(Address)
  address: Address;
  @Prop({
    default: null,
  })
  contactName: string;
  @Prop({
    default: null,
  })
  gender: string;
  @Prop({
    default: null,
  })
  relationship: string;
  @Prop(Telecom)
  telecom: Telecom;
}

@Schema()
export class Education {
  @Prop({
    default: null,
  })
  description: string;

  @Prop({
    default: null,
  })
  eduLevelName: string;

  @Prop({
    default: null,
  })
  id: string;
}

@Schema()
export class Job {
  @Prop({
    default: null,
  })
  description: string;

  @Prop({
    default: null,
  })
  id: string;

  @Prop({
    default: null,
  })
  jobName: string;
}

@Schema()
export class Patient {
  @Prop([Address])
  addressDets: Address;

  @Prop({
    default: null,
  })
  babyName: string;

  @Prop({
    default: null,
  })
  birthDate: string;

  @Prop({
    default: null,
  })
  birthPlace: string;

  @Prop(Contact)
  contact: Contact;

  @Prop(Education)
  education: Education;

  @Prop({
    default: null,
  })
  firstName: string;

  @Prop({
    default: null,
  })
  gender: string;

  @Prop({
    default: null,
  })
  idNumber: string;

  @Prop({
    default: null,
  })
  idType: string;

  @Prop(Job)
  job: Job;

  @Prop({
    default: null,
  })
  lastName: string;

  @Prop({
    default: null,
  })
  maritalStatus: string;

  @Prop({
    default: null,
  })
  motherName: string;

  @Prop({
    default: null,
  })
  religion: string;

  @Prop(Telecom)
  telecom: Telecom;
}

@Schema()
export class Practitioner {
  @Prop([Address])
  addressDets: Address;

  @Prop({
    default: null,
  })
  birthDate: string;

  @Prop({
    default: null,
  })
  gender: string;

  @Prop({
    default: null,
  })
  name: string;

  @Prop({
    default: null,
  })
  nik: string;

  @Prop([PracticeSchedule])
  practiceSchedules: PracticeSchedule;

  //   practitionerId	string
  // practitionerSpecialty	string
  // practitionerTypeCode	string

  @Prop({
    default: null,
  })
  practitionerId: string;

  @Prop({
    default: null,
  })
  practitionerSpecialty: string;

  @Prop({
    default: null,
  })
  practitionerTypeCode: string;

  @Prop({
    default: null,
  })
  resId: string;

  @Prop(Telecom)
  telecom: Telecom;
}

@Schema()
export class Encounter {
  @Prop({
    default: null,
  })
  encounterCLass: Code;

  @Prop([EncounterClassHistory])
  encounterClassHistories: EncounterClassHistory[];

  @Prop([Code])
  encounterStatus: Code;

  @Prop([EncounterStatusHistories])
  encounterStatusHistories: EncounterStatusHistories[];

  @Prop([Code])
  encounterType: Code;

  @Prop({
    default: null,
  })
  escortName: string;

  @Prop({
    default: null,
  })
  escortPhoneNumber: string;

  @Prop({
    default: null,
  })
  id: string;

  @Prop(Location)
  location: Location;

  @Prop([Code])
  participantType: Code;

  @Prop(Patient)
  patient: Patient;

  @Prop({
    default: null,
  })
  paymentAccountNumber: string;

  @Prop({
    default: null,
  })
  paymentMethodCode: string;

  @Prop(Practitioner)
  practitioner: Practitioner;

  @Prop({
    default: null,
  })
  queueNo: string;

  @Prop({
    default: null,
  })
  resId: string;

  @Prop([Code])
  serviceType: Code;
}
