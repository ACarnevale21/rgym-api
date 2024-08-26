import { Excersice } from '../../../modules';
import { ExerciseDomain } from '../../domain/excercise.domain';
import { ExcersiceSchemaType } from '../entities/excercise.schema';

export const ExcersiceRepository = {
  async getExcersiceList() {
    return await Excersice.find();
  },
  async getExcersiceById(id: string) {
    try {
      return await Excersice.findById(id);
    } catch (error) {
      console.error(error);
      throw new Error('Error, excersice not found');
    }
  },
  async createExcersice(excercise: ExerciseDomain) {
    try {
      const excersice = new Excersice(excercise);
      return await Excersice.create(excersice);
    } catch (error) {
      console.error(error);
      throw new Error('Error creating excersice');
    }
  },
  async updateExcersice(exerciseId: string, excersice: ExcersiceSchemaType) {
    try {
      return await Excersice.findByIdAndUpdate(exerciseId, excersice, {
        new: true,
      });
    } catch (error) {
      console.error(error);
      throw new Error('Error updating excersice');
    }
  },
  async deleteExcersice(id: string) {
    try {
      return await Excersice.findByIdAndDelete(id);
    } catch (error) {
      console.error(error);
      throw new Error('Error deleting excersice');
    }
  },
  async getExcersiceByName(name: string) {
    try {
      return await Excersice.findOne({ name });
    } catch (error) {
      console.error(error);
      throw new Error('Error getting excersice by name');
    }
  },
};
