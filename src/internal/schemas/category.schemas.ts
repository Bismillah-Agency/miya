import { Prop, Schema } from '@nestjs/mongoose';
import { Code } from './code.schemas';

@Schema()
export class Category {
  @Prop()
  categoryCode: string;
  @Prop()
  categoryName: string;
  @Prop([Code])
  codes: Code[];
  @Prop()
  id: number;
}
