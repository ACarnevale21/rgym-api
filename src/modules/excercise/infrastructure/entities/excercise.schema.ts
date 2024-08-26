import mongoose, { InferSchemaType, Document } from 'mongoose';

export const ExcersiceSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    muscleGroup: { type: String, required: true },
    videoUrl: { type: String, required: false },
    imageUrl: { type: String, required: false },
  },
  {
    timestamps: true,
  },
);
export type ExcersiceSchemaType = InferSchemaType<typeof ExcersiceSchema> &
  Document & {
    _id: mongoose.Types.ObjectId | string;
  };
