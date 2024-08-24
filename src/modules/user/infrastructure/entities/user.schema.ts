import mongoose, { InferSchemaType, Document } from 'mongoose';
import { IUser } from '../../application/interface/user.interface';
import { UserGoal } from '../../application/enum/user-goal.enum';

export const UserSchema = new mongoose.Schema<IUser>(
  {
    name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: Number },
    weight: { type: Number },
    height: { type: Number },
    goal: {
      type: String,
      enum: UserGoal,
    },
  },
  {
    timestamps: true,
  },
);

export type UserSchemaType = InferSchemaType<typeof UserSchema> &
  Document & {
    _id: mongoose.Types.ObjectId | string;
  };
