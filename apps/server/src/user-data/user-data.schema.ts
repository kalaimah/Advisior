import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

class FinancialData {
  @Prop()
  type: String;

  @Prop()
  firm: String;

  @Prop()
  amount: Number;

  @Prop()
  outstanding_amount: Number;

  @Prop()
  remaining_tenure_months: Number;
}

@Schema({ collection: 'userdata' })
export class UserData {
  @Prop()
  _id: String;

  @Prop({unique: true, required: true})
  SSN: String;

  @Prop()
  date_of_birth: Date;

  @Prop()
  monthly_income: Number;

  @Prop()
  monthly_expenses: Number;

  @Prop()
  marital_status: String;

  @Prop()
  no_of_dependents: String;

  @Prop({type: FinancialData})
  cash: FinancialData[];

  @Prop({type: FinancialData})
  investment: FinancialData[];

  @Prop({type: FinancialData})
  credit: FinancialData[];

  @Prop({type: FinancialData})
  loan: FinancialData[];

  @Prop({type: FinancialData})
  insurance: FinancialData[];

  @Prop({type: FinancialData})
  other_asset: FinancialData[];
}

export type UserDocument = UserData & Document;

export const UserModel =  SchemaFactory.createForClass(UserData);