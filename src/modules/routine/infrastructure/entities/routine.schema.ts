import mongoose, { InferSchemaType } from 'mongoose';

export const RoutineSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    excersices: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Excersice',
      },
    ],
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Trainer',
      required: true,
    },
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  {
    timestamps: true,
  },
);

export type RoutineSchemaType = InferSchemaType<typeof RoutineSchema> &
  Document & {
    _id: mongoose.Types.ObjectId | string;
  };
