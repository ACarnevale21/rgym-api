import { TrainerSchemaType } from '../../infrastructure/entities/trainer.schema';
import { TrainerRepository } from '../../infrastructure/persistence/trainer.repository';
import { CreateTrainerRequestDto } from '../dto/request/create-trainer.dto';
import bcrypt from 'bcryptjs';
import { newTrainerMapper, updateTrainerMapper } from '../utils/trainer.utils';
import { UpdateTrainerRequestDto } from '../dto/request/update-trainer.dto';

export const TrainerService = {
  async getTrainerList() {
    return await TrainerRepository.getTrainerList();
  },
  async getTrainerById(id: string) {
    return await TrainerRepository.getTrainerById(id);
  },
  async createTrainer(
    trainerData: CreateTrainerRequestDto,
  ): Promise<TrainerSchemaType> {
    const trainerExists = await TrainerRepository.getTrainerByEmail(
      trainerData.email,
    );

    if (trainerExists) {
      throw new Error('Trainer already exists');
    }

    const newTrainerMapped = newTrainerMapper(trainerData);

    newTrainerMapped.password = await bcrypt.hash(trainerData.password, 10);

    return await TrainerRepository.createTrainer(newTrainerMapped);
  },

  async getTrainerByEmail(email: string) {
    return await TrainerRepository.getTrainerByEmail(email);
  },

  async updateTrainer(
    trainerId: string,
    updatedTrainerInformation: UpdateTrainerRequestDto,
  ) {
    const trainerExists = await TrainerRepository.getTrainerById(trainerId);
    const trainerMapped = updateTrainerMapper(
      trainerExists,
      updatedTrainerInformation,
    );

    return await TrainerRepository.updateTrainer(trainerMapped);
  },

  async deleteTrainer(id: string) {
    return await TrainerRepository.deleteTrainer(id);
  },
};
