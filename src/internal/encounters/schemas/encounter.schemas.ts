import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Encounter } from 'internal/schemas';

@Schema({
  timestamps: true,
})
export class Encounterr extends Encounter {}

export type EncounterrDocument = HydratedDocument<Encounterr>;

export const EncounterrSchema = SchemaFactory.createForClass(Encounterr);
