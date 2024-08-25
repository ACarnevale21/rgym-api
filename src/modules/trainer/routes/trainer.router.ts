import { Router } from 'express';
import { TrainerController } from '../controller/trainer.controller';

const trainerNavigation = Router();

trainerNavigation.get('/trainer', TrainerController.getTrainerList);
trainerNavigation.get('/trainer/:id', TrainerController.getTrainerById);
trainerNavigation.post('/trainer', TrainerController.createTrainer);
trainerNavigation.put('/trainer/:id', TrainerController.updateTrainer);
trainerNavigation.delete('/trainer/:id', TrainerController.deleteTrainer);

export default trainerNavigation;
