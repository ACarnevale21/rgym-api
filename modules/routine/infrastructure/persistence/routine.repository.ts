import { connectDatabase } from '../../../../db.connection';
import { Routine } from '../../../modules';
import { RoutineSchemaType } from '../entities/routine.schema';

export const RoutineRepository = {
  async getRoutineList() {
    await connectDatabase();
    return await Routine.find();
  },
  async getRoutineById(id: string) {
    await connectDatabase();
    return await Routine.findById(id);
  },
  async createRoutine(routine: RoutineSchemaType) {
    await connectDatabase();
    return await Routine.create(routine);
  },
  async updateRoutine(routine: RoutineSchemaType) {
    await connectDatabase();
    return await Routine.findByIdAndUpdate(routine._id, routine, {
      new: true,
    });
  },
  async deleteRoutine(id: string) {
    await connectDatabase();
    return await Routine.findByIdAndDelete(id);
  },
};
