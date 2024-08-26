import { Trainer } from '../../../modules';
import { TrainerSchemaType } from '../entities/trainer.schema';
import mongoose from 'mongoose';

export const TrainerRepository = {
  async getTrainerList() {
    try {
      return await Trainer.find();
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(`Error fetching trainer list: ${error.message}`);
      }
      throw new Error('Unknown error fetching trainer list');
    }
  },
  async getTrainerByEmail(email: string) {
    try {
      return await Trainer.findOne({ email });
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(`Error fetching trainer by email: ${error.message}`);
      }
      throw new Error('Unknown error fetching trainer by email');
    }
  },
  async getTrainerById(id: string) {
    try {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new Error('Invalid trainer ID format');
      }

      const trainer = await Trainer.findById(id);
      if (!trainer) {
        throw new Error('Trainer not found');
      }
      return trainer;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(`Error fetching trainer by ID: ${error.message}`);
      }
      throw new Error('Unknown error fetching trainer by ID');
    }
  },

  async createTrainer(trainer: TrainerSchemaType) {
    try {
      return await Trainer.create(trainer);
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(`Error creating trainer: ${error.message}`);
      }
      throw new Error('Unknown error creating trainer');
    }
  },

  async updateTrainer(trainer: TrainerSchemaType) {
    try {
      if (!mongoose.Types.ObjectId.isValid(trainer._id)) {
        throw new Error('Invalid trainer ID format');
      }

      const updatedTrainer = await Trainer.findByIdAndUpdate(
        trainer._id,
        trainer,
        {
          new: true,
          runValidators: true,
        },
      );
      if (!updatedTrainer) {
        throw new Error('Trainer not found');
      }
      return updatedTrainer;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(`Error updating trainer: ${error.message}`);
      }
      throw new Error('Unknown error updating trainer');
    }
  },

  async deleteTrainer(id: string) {
    try {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new Error('Invalid trainer ID format');
      }

      const deletedTrainer = await Trainer.findByIdAndDelete(id);
      if (!deletedTrainer) {
        throw new Error('Trainer not found');
      }
      return deletedTrainer;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(`Error deleting trainer: ${error.message}`);
      }
      throw new Error('Unknown error deleting trainer');
    }
  },
};
