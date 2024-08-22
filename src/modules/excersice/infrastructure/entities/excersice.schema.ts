import mongoose, { InferSchemaType } from 'mongoose';

export const ExcersiceSchema = new mongoose.Schema(
  {
    id: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    videoUrl: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

export type ExcersiceSchemaType = InferSchemaType<typeof ExcersiceSchema> &
  Document & {
    _id: mongoose.Types.ObjectId | string;
  };
