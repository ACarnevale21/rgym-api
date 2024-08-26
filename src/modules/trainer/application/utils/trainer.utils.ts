import { Trainer } from '@/modules/modules';
import { TrainerSchemaType } from '../../infrastructure/entities/trainer.schema';
import { ITrainer } from '../interface/trainer.interface';
import { CreateTrainerRequestDto } from '../dto/request/create-trainer.dto';

export const newTrainerMapper = (
  user: CreateTrainerRequestDto,
): TrainerSchemaType => {
  const newTrainer = new Trainer();
  newTrainer.name = user.name;
  newTrainer.password = user.password;
  newTrainer.email = user.email;
  return newTrainer;
};

export const updateTrainerMapper = (
  trainer: TrainerSchemaType,
  updatedTrainer: Partial<ITrainer>,
): TrainerSchemaType => {
  trainer.name = updatedTrainer.name;
  trainer.email = updatedTrainer.email;
  trainer.password = updatedTrainer.password;
  trainer.routinesCreated = updatedTrainer.routinesCreated;
  return trainer;
};
