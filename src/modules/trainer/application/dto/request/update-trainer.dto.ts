import { Types } from 'mongoose';

export class UpdateTrainerRequestDto {
  name?: string;

  email?: string;

  password?: string;

  routinesCreated?: Types.ObjectId[];
}
