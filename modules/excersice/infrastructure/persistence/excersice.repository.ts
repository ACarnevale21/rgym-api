import { connectDatabase } from '../../../../db.connection';
import { Excersice } from '../../../modules';
import { ExcersiceSchemaType } from '../entities/excersice.schema';

export const ExcersiceRepository = {
  async getExcersiceList() {
    await connectDatabase();
    return await Excersice.find();
  },
  async getExcersiceById(id: string) {
    await connectDatabase();
    return await Excersice.findById(id);
  },
  async createExcersice(excersice: ExcersiceSchemaType) {
    await connectDatabase();
    return await Excersice.create(excersice);
  },
  async updateExcersice(excersice: ExcersiceSchemaType) {
    await connectDatabase();
    return await Excersice.findByIdAndUpdate(excersice.id, excersice, {
      new: true,
    });
  },
  async deleteExcersice(id: string) {
    await connectDatabase();
    return await Excersice.findByIdAndDelete(id);
  },
};
