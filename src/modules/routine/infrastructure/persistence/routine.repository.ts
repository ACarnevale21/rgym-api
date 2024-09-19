import { Routine } from '../../../modules';
import { RoutineSchemaType } from '../entities/routine.schema';

export const RoutineRepository = {
  async getRoutineList() {
    return await Routine.find();
  },
  async getRoutineById(id: string) {
    return await Routine.findById(id);
  },
  async getRoutineByName(name: string) {
    try {
      return await Routine.findOne({ name });
    } catch (error) {
      console.error(error);
      throw new Error('Error getting excersice by name');
    }
  },
  async createRoutine(routines: RoutineSchemaType) {
    try {
      const routine = new Routine(routines);
      return await Routine.create(routine);
    } catch (error) {
      console.error(error);
      throw new Error('Error creating routine');
    }
  },
  async updateRoutine(id: string, routine: RoutineSchemaType) {
    return await Routine.findByIdAndUpdate(id, routine, {
      new: true,
    });
  },
  async deleteRoutine(id: string) {
    return await Routine.findByIdAndDelete(id);
  },
};
