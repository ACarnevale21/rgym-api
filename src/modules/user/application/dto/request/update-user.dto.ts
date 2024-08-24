import { Types } from 'mongoose';

export class UpdateUserRequestDto {
  name?: string;
  email?: string;
  password?: string;
  description?: string;
  routine?: Types.ObjectId[];
}
