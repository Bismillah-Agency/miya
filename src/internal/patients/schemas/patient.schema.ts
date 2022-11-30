import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PatientDocument = HydratedDocument<Patient>;

@Schema()
export class Patient {
  @Prop()
  name: string;

  @Prop()
  age: number;
}

export const PatientSchema = SchemaFactory.createForClass(Patient);