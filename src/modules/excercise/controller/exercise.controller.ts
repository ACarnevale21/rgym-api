import { Request, Response } from 'express';
import { ExcersiceService } from '../application/service/excercise.service';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { ExerciseRequestDto } from '../application/dto/exercise-request.dto';
import { UpdateExerciseDto } from '../application/dto/exercise-update.dto';
import { validateDto } from '@/common/application/utils/validate.dto';

export const ExerciseController = {
  async getExerciseList(req: Request, res: Response) {
    try {
      const exerciseList = await ExcersiceService.getExcersiceList();
      return res.status(200).json(exerciseList);
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error retrieving exercises:', error);
        return res.status(500).json({
          message: 'Error retrieving exercises',
          error: error.message,
        });
      }
    }
  },

  async getExerciseById(req: Request, res: Response) {
    try {
      const exercise = await ExcersiceService.getExcersiceById(req.params.id);
      if (!exercise) {
        return res.status(404).json({ message: 'Exercise not found' });
      }
      return res.status(200).json(exercise);
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error retrieving exercise:', error);
        return res
          .status(500)
          .json({ message: 'Error retrieving exercise', error: error.message });
      }
    }
  },

  async createExercise(req: Request, res: Response) {
    try {
      const exercise = plainToClass(ExerciseRequestDto, req.body);
      const errors = await validate(exercise);

      if (errors.length > 0) {
        return res.status(400).json({ message: 'Validation failed', errors });
      }

      const createdExercise = await ExcersiceService.createExcersice(exercise);
      return res.status(201).json(createdExercise);
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error creating exercise:', error);
        return res
          .status(500)
          .json({ message: 'Error creating exercise', error: error.message });
      }
    }
  },

  async updateExercise(req: Request, res: Response) {
    try {
      const exerciseId = req.params.id;
      const exercise = await validateDto(UpdateExerciseDto, req.body);

      const updatedExercise = await ExcersiceService.updateExcersice(
        exerciseId,
        exercise as UpdateExerciseDto,
      );
      return res.status(200).json(updatedExercise);
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error updating exercise:', error);
        return res
          .status(500)
          .json({ message: 'Error updating exercise', error: error.message });
      }
    }
  },
  async deleteExercise(req: Request, res: Response) {
    try {
      const exerciseId = req.params.id;
      await ExcersiceService.deleteExcersice(exerciseId);
      return res.status(200).json({ message: 'Exercise deleted' });
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error deleting exercise:', error);
        return res
          .status(500)
          .json({ message: 'Error deleting exercise', error: error.message });
      }
    }
  },
};
