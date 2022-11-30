import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Address } from 'internal/schemas';

export type PendaftaranPasienDocument = HydratedDocument<any>;

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

@Schema({ _id: false })
export class Contact {
  @Prop([Address])
  address: Address;
  @Prop()
  contactName: string;
  @Prop()
  gender: string;
  @Prop()
  relationship: string;
  @Prop([Telecom])
  telecom: Telecom;
}

@Schema({ _id: false })
export class Patient {
  @Prop([Address])
  addressDets: Address[];

  @Prop()
  babyName: string;

  @Prop()
  birthDate: string;

  @Prop()
  birthPlace: string;
  contact: Contact;
  @Prop()
  education: string;
  @Prop()
  firstName: string;
  @Prop()
  gender: string;
  @Prop()
  idNumber: string;
  @Prop()
  idType: string;
  @Prop()
  job: string;
  @Prop()
  lastName: string;
  @Prop()
  maritalStatus: string;
  @Prop()
  motherIdNumber: string;
  @Prop()
  motherName: string;
  @Prop()
  providerId: number;
  @Prop()
  religion: string;
}

@Schema()
export class PendaftaranPasien {
  @Prop()
  id: string;

  @Prop()
  escortName: string;

  @Prop()
  age: number;

  @Prop()
  escortPhoneNumber: string;

  @Prop()
  locationId: string;

  @Prop([Patient])
  patient: Patient;

  @Prop()
  paymentAccountNumber: string;

  @Prop()
  paymentMethodCode: string;

  @Prop()
  paymentMethodId: string;

  @Prop()
  paymentMethodName: string;
}

export const PendaftaranPasienSchema =
  SchemaFactory.createForClass(PendaftaranPasien);
