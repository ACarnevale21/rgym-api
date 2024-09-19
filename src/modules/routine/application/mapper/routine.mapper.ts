import mongoose from 'mongoose';
import { RoutineSchemaType } from '../../infrastructure/entities/routine.schema';
import { CreateRoutineRequestDto } from '../dto/request/create-routine.dto';
import { Routine } from '@/modules/modules';
import { IRoutine } from '../interface/routine.interface';

export const routineMapper = (
  routine: CreateRoutineRequestDto,
): RoutineSchemaType => {
  const newRoutine = new Routine();
  newRoutine.name = routine.name;
  newRoutine.description = routine.description;
  newRoutine.exercises = new mongoose.Types.DocumentArray(
    routine.exercises.map((exercise) => ({
      exerciseId: new mongoose.Types.ObjectId(exercise.exerciseId),
      sets: exercise.sets,
      reps: exercise.reps,
      rest: exercise.rest,
    })),
  );
  newRoutine.createdBy = new mongoose.Types.ObjectId(routine.createdBy);
  return newRoutine;
};

export const updateRoutineMapper = (
  routine: RoutineSchemaType,
  updatedRoutineInformation: Partial<IRoutine>,
): RoutineSchemaType => {
  try {
    routine.name = updatedRoutineInformation.name;
    routine.description = updatedRoutineInformation.description;

    if (
      updatedRoutineInformation.exercises &&
      Array.isArray(updatedRoutineInformation.exercises)
    ) {
      routine.exercises = new mongoose.Types.DocumentArray(
        updatedRoutineInformation.exercises.map((exercise) => ({
          exerciseId: new mongoose.Types.ObjectId(exercise.exerciseId),
          sets: exercise.sets,
          reps: exercise.reps,
          rest: exercise.rest,
        })),
      );
    }
    return routine;
  } catch (error) {
    console.error(error);
    throw new Error('Error updating routine');
  }
};
