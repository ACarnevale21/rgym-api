import { Excersice } from '../../../modules';
import { ExcersiceSchemaType } from '../entities/excersice.schema';

export const ExcersiceRepository = {
  async getExcersiceList() {
    return await Excersice.find();
  },
  async getExcersiceById(id: string) {
    return await Excersice.findById(id);
  },
  async createExcersice(excersice: ExcersiceSchemaType) {
    return await Excersice.create(excersice);
  },
  async updateExcersice(excersice: ExcersiceSchemaType) {
    return await Excersice.findByIdAndUpdate(excersice.id, excersice, {
      new: true,
    });
  },
  async deleteExcersice(id: string) {
    return await Excersice.findByIdAndDelete(id);
  },
};
