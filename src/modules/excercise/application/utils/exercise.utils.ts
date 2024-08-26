import { ExcersiceSchemaType } from '../../infrastructure/entities/excercise.schema';
import { ExcersiceRepository } from '../../infrastructure/persistence/excercise.repository';
import { ExerciseRequestDto } from '../dto/exercise-request.dto';

export async function validateExerciseAndGet(
  exercise: ExerciseRequestDto,
): Promise<ExcersiceSchemaType> {
  const existingExercise = await ExcersiceRepository.getExcersiceByName(
    exercise.name,
  );

  if (existingExercise) {
    throw new Error('The exercise already exists');
  }
  return existingExercise;
}
