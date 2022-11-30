import { Prop, Schema } from '@nestjs/mongoose';

@Schema()
export class Code {
  @Prop()
  code: string;
  @Prop()
  description: string;
  @Prop()
  name: string;
}
