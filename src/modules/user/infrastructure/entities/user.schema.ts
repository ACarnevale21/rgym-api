import mongoose, { InferSchemaType, Document } from 'mongoose';

export const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    description: { type: String, required: false },
    routine: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Routine',
      },
    ],
  },
  {
    timestamps: true,
  },
);

export type UserSchemaType = InferSchemaType<typeof UserSchema> &
  Document & {
    _id: mongoose.Types.ObjectId | string;
  };
