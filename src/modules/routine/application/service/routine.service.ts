import { RoutineSchemaType } from '../../infrastructure/entities/routine.schema';
import { RoutineRepository } from '../../infrastructure/persistence/routine.repository';
import { CreateRoutineRequestDto } from '../dto/request/create-routine.dto';
import { UpdateRoutineRequestDto } from '../dto/request/update-routine-dto';
import { routineMapper, updateRoutineMapper } from '../mapper/routinemapper';

export const RoutineService = {
  async getRoutineList() {
    return await RoutineRepository.getRoutineList();
  },
  async getRoutineById(id: string) {
    return await RoutineRepository.getRoutineById(id);
  },
  async getRoutineByName(name: string) {
    return await RoutineRepository.getRoutineByName(name);
  },
  async createRoutine(
    routines: CreateRoutineRequestDto,
  ): Promise<RoutineSchemaType> {
    try {
      const newRoutine = routineMapper(routines);
      return await RoutineRepository.createRoutine(newRoutine);
    } catch (error) {
      console.error(error);
      throw new Error('Error creating routine');
    }
  },
  async updateRoutine(
    routineId: string,
    updatedRoutineInformation: UpdateRoutineRequestDto,
  ) {
    const routine = await RoutineRepository.getRoutineById(routineId);
    const routineMapped = updateRoutineMapper(
      routine,
      updatedRoutineInformation,
    );
    console.log(routineMapped);
    return await RoutineRepository.updateRoutine(routineId, routineMapped);
  },
  async deleteRoutine(id: string) {
    return await RoutineRepository.deleteRoutine(id);
  },
};
