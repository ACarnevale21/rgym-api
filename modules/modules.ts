import mongoose, { Model, model } from "mongoose";

import {
  ExcersiceSchema,
  ExcersiceSchemaType,
} from "./excersice/infrastructure/entities/excersice.schema";
import {
  RoutineSchema,
  RoutineSchemaType,
} from "./routine/infrastructure/entities/routine.schema";
import {
  UserSchema,
  UserSchemaType,
} from "./user/infrastructure/entities/user.schema";
import {
  TrainerSchema,
  TrainerSchemaType,
} from "./trainer/infrastructure/entities/trainer.schema";

export const Excersice: Model<ExcersiceSchemaType> =
  mongoose.models?.Excersice ||
  model<ExcersiceSchemaType>("Excersice", ExcersiceSchema);

export const Routine: Model<RoutineSchemaType> =
  mongoose.models?.Routine ||
  model<RoutineSchemaType>("Routine", RoutineSchema);

export const User: Model<UserSchemaType> =
  mongoose.models?.User || model<UserSchemaType>("User", UserSchema);

export const Trainer: Model<TrainerSchemaType> =
  mongoose.models?.Trainer ||
  model<TrainerSchemaType>("Trainer", TrainerSchema);
