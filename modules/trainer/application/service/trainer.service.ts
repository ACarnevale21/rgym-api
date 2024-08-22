import { TrainerSchemaType } from '../../infrastructure/entities/trainer.schema';
import { TrainerRepository } from '../../infrastructure/persistence/trainer.repository';

export const TrainerService = {
  async getTrainerList() {
    return await TrainerRepository.getTrainerList();
  },
  async getTrainerById(id: string) {
    return await TrainerRepository.getTrainerById(id);
  },
  async createTrainer(trainer: TrainerSchemaType) {
    return await TrainerRepository.createTrainer(trainer);
  },
  async updateTrainer(trainer: TrainerSchemaType) {
    return await TrainerRepository.updateTrainer(trainer);
  },
  async deleteTrainer(id: string) {
    return await TrainerRepository.deleteTrainer(id);
  },
};
