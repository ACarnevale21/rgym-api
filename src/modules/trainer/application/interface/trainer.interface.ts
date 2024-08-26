import { Types } from 'mongoose';

export interface ITrainer extends Document {
  name: string;
  email: string;
  password: string;
  routinesCreated: Types.ObjectId[];
}
