import { ExerciseDomain } from '../../domain/excercise.domain';
import { ExcersiceSchemaType } from '../../infrastructure/entities/excercise.schema';
import { ExerciseRequestDto } from '../dto/exercise-request.dto';
import { IExcercise } from '../interface/excercise.interface';

export const exerciseMapper = (
  exercise: ExerciseRequestDto,
): ExerciseDomain => {
  const exerciseDomain = new ExerciseDomain();
  exerciseDomain.name = exercise.name;
  exerciseDomain.description = exercise.description;
  exerciseDomain.muscleGroup = exercise.muscleGroup;
  exerciseDomain.videoUrl = exercise.videoUrl;
  exerciseDomain.imageUrl = exercise.imageUrl;
  return exerciseDomain;
};

export const updateExerciseMapper = (
  exercise: ExcersiceSchemaType,
  updatedExerciseInformation: Partial<IExcercise>,
): ExcersiceSchemaType => {
  exercise.name = updatedExerciseInformation.name;
  exercise.description = updatedExerciseInformation.description;
  exercise.muscleGroup = updatedExerciseInformation.muscleGroup;
  exercise.videoUrl = updatedExerciseInformation.videoUrl;
  exercise.imageUrl = updatedExerciseInformation.imageUrl;
  return exercise;
};
