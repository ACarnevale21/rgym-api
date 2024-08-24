import mongoose, { InferSchemaType, Document } from 'mongoose';

export const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    description: { type: String, required: false },
    role: { type: String, enum: ['admin', 'user'], required: true },
    age: { type: Number },
    weight: { type: Number },
    height: { type: Number },
    goal: {
      type: String,
      enum: ['Perder peso', 'Ganar músculo', 'Mantenerme en forma'],
    },
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
