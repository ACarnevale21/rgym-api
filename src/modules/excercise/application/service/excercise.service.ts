import { ExcersiceRepository } from '../../infrastructure/persistence/excercise.repository';
import { ExerciseRequestDto } from '../dto/exercise-request.dto';
import { UpdateExerciseDto } from '../dto/exercise-update.dto';
import {
  exerciseMapper,
  updateExerciseMapper,
} from '../mapper/exercise.mapper';
import { validateExerciseAndGet } from '../utils/exercise.utils';

export const ExcersiceService = {
  async getExcersiceList() {
    return await ExcersiceRepository.getExcersiceList();
  },
  async getExcersiceById(id: string) {
    return await ExcersiceRepository.getExcersiceById(id);
  },
  async createExcersice(excercise: ExerciseRequestDto) {
    await validateExerciseAndGet(excercise);

    const exerciseMapped = exerciseMapper(excercise);
    return await ExcersiceRepository.createExcersice(exerciseMapped);
  },
  async updateExcersice(
    exerciseId: string,
    updatedExerciseInformation: UpdateExerciseDto,
  ) {
    const exercise = await ExcersiceRepository.getExcersiceById(exerciseId);
    const exerciseMapped = updateExerciseMapper(
      exercise,
      updatedExerciseInformation,
    );

    return await ExcersiceRepository.updateExcersice(
      exerciseId,
      exerciseMapped,
    );
  },
  async deleteExcersice(id: string) {
    return await ExcersiceRepository.deleteExcersice(id);
  },
};
