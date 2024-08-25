import { Router } from 'express';
import { ExerciseController } from '../controller/exercise.controller';
import authMiddleware from '@/modules/auth/middleware/auth.middleware';

const exerciseNavigation = Router();

exerciseNavigation.post(
  '/exercise',
  authMiddleware,
  ExerciseController.createExercise,
);
exerciseNavigation.patch(
  '/exercise/:id',
  authMiddleware,
  ExerciseController.updateExercise,
);
exerciseNavigation.delete(
  '/exercise/:id',
  authMiddleware,
  ExerciseController.deleteExercise,
);
exerciseNavigation.get(
  '/exercise',
  authMiddleware,
  ExerciseController.getExerciseList,
);
exerciseNavigation.get(
  '/exercise/:id',
  authMiddleware,
  ExerciseController.getExerciseById,
);

export default exerciseNavigation;
