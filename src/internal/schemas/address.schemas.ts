import { Prop, Schema } from '@nestjs/mongoose';

@Schema()
export class Address {
  @Prop()
  addressLine: string;
  @Prop()
  addressType: string;
  @Prop()
  cityId: string;
  @Prop()
  countryId: string;
  @Prop()
  districtId: string;
  @Prop()
  postalCode: string;
  @Prop()
  provinceId: string;
  @Prop()
  rt: string;
  @Prop()
  rw: string;
  @Prop()
  subDistrictId: string;
}
