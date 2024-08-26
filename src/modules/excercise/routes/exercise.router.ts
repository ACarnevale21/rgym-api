import { Router } from 'express';
import { ExerciseController } from '../controller/exercise.controller';

const exerciseNavigation = Router();

exerciseNavigation.post('/exercise', ExerciseController.createExercise);
exerciseNavigation.patch('/exercise/:id', ExerciseController.updateExercise);
exerciseNavigation.delete('/exercise/:id', ExerciseController.deleteExercise);
exerciseNavigation.get('/exercise', ExerciseController.getExerciseList);
exerciseNavigation.get('/exercise/:id', ExerciseController.getExerciseById);

export default exerciseNavigation;
