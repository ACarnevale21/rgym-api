import mongoose, { InferSchemaType, Document, Schema } from 'mongoose';

export const RoutineSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    exercises: [
      {
        exerciseId: {
          type: Schema.Types.ObjectId,
          ref: 'Exercise',
          required: true,
        },
        sets: { type: Number, required: true },
        reps: { type: Number, required: true },
        rest: { type: Number, required: true },
      },
    ],
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Trainer',
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export type RoutineSchemaType = InferSchemaType<typeof RoutineSchema> &
  Document & {
    _id: mongoose.Types.ObjectId | string;
  };
