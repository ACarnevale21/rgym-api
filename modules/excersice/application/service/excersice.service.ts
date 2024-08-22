import { ExcersiceSchemaType } from '../../infrastructure/entities/excersice.schema';
import { ExcersiceRepository } from '../../infrastructure/persistence/excersice.repository';

export const ExcersiceService = {
  async getExcersiceList() {
    return await ExcersiceRepository.getExcersiceList();
  },
  async getExcersiceById(id: string) {
    return await ExcersiceRepository.getExcersiceById(id);
  },
  async createExcersice(excersice: ExcersiceSchemaType) {
    return await ExcersiceRepository.createExcersice(excersice);
  },
  async updateExcersice(excersice: ExcersiceSchemaType) {
    return await ExcersiceRepository.updateExcersice(excersice);
  },
  async deleteExcersice(id: string) {
    return await ExcersiceRepository.deleteExcersice(id);
  },
};
