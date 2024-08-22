import mongoose, { InferSchemaType } from 'mongoose';

export const UserSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    routine: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Routine',
      },
    ],
  },
  {
    timestamps: true,
  }
);

export type UserSchemaType = InferSchemaType<typeof UserSchema> &
  Document & {
    _id: mongoose.Types.ObjectId | string;
  };
