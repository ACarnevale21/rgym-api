import { Routine } from '../../../modules';
import { RoutineSchemaType } from '../entities/routine.schema';

export const RoutineRepository = {
  async getRoutineList() {
    return await Routine.find();
  },
  async getRoutineById(id: string) {
    return await Routine.findById(id);
  },
  async createRoutine(routine: RoutineSchemaType) {
    return await Routine.create(routine);
  },
  async updateRoutine(routine: RoutineSchemaType) {
    return await Routine.findByIdAndUpdate(routine._id, routine, {
      new: true,
    });
  },
  async deleteRoutine(id: string) {
    return await Routine.findByIdAndDelete(id);
  },
};
