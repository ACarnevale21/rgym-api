import { RoutineSchemaType } from '../../infrastructure/entities/routine.schema';
import { RoutineRepository } from '../../infrastructure/persistence/routine.repository';

export const RoutineService = {
  async getRoutineList() {
    return await RoutineRepository.getRoutineList();
  },
  async getRoutineById(id: string) {
    return await RoutineRepository.getRoutineById(id);
  },
  async createRoutine(routine: RoutineSchemaType) {
    return await RoutineRepository.createRoutine(routine);
  },
  async updateRoutine(routine: RoutineSchemaType) {
    return await RoutineRepository.updateRoutine(routine);
  },
  async deleteRoutine(id: string) {
    return await RoutineRepository.deleteRoutine(id);
  },
};
