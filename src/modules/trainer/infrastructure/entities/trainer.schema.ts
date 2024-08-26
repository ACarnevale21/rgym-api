import mongoose, { InferSchemaType, Document } from 'mongoose';

export const TrainerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    routinesCreated: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Routine',
        required: false,
      },
    ],
  },
  {
    timestamps: true,
  },
);

export type TrainerSchemaType = InferSchemaType<typeof TrainerSchema> &
  Document & {
    _id: mongoose.Types.ObjectId | string;
  };
