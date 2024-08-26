import { Router } from 'express';
import { TrainerController } from '../controller/trainer.controller';
import authMiddleware from '@/modules/auth/middleware/auth.middleware';

const trainerNavigation = Router();

trainerNavigation.post('/trainer', TrainerController.createTrainer);
trainerNavigation.get(
  '/trainer',
  authMiddleware,
  TrainerController.getTrainerList,
);
trainerNavigation.get(
  '/trainer/:id',
  authMiddleware,
  TrainerController.getTrainerById,
);
trainerNavigation.put(
  '/trainer/:id',
  authMiddleware,
  TrainerController.updateTrainer,
);
trainerNavigation.delete(
  '/trainer/:id',
  authMiddleware,
  TrainerController.deleteTrainer,
);

export default trainerNavigation;
