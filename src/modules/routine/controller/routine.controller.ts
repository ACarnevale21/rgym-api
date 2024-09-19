import { plainToClass } from 'class-transformer';
import { RoutineService } from '../application/service/routine.service';
import { Request, Response } from 'express';
import { CreateRoutineRequestDto } from '../application/dto/request/create-routine.dto';
import { validate } from 'class-validator';
import { UpdateRoutineRequestDto } from '../application/dto/request/update-routine-dto';

export const RoutineController = {
  async getRoutineList(req: Request, res: Response) {
    try {
      const routineList = await RoutineService.getRoutineList();
      res.status(200).json(routineList);
    } catch (error) {
      res.status(500).send(error);
    }
  },

  async createRoutine(req: Request, res: Response) {
    try {
      const routine = plainToClass(CreateRoutineRequestDto, req.body);
      const errors = await validate(routine);

      if (errors.length > 0) {
        return res.status(400).json({ message: 'Validation failed', errors });
      }

      const existingRoutine = await RoutineService.getRoutineByName(
        routine.name,
      );

      if (existingRoutine) {
        return res.status(400).json({ message: 'Routine already exists' });
      }

      const createdRoutine = await RoutineService.createRoutine(routine);
      res.status(201).json(createdRoutine);
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'Error creating routine', error });
    }
  },

  async getRoutineById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const routine = await RoutineService.getRoutineById(id);
      if (!routine) {
        return res.status(404).json({ message: 'Routine not found' });
      }
      res.status(200).json(routine);
    } catch (error) {
      res.status(500).send(error);
    }
  },

  async updateRoutine(req: Request, res: Response) {
    try {
      const routine = plainToClass(UpdateRoutineRequestDto, req.body);
      const errors = await validate(routine);

      const routineId = req.params.id;

      if (errors.length > 0) {
        return res.status(400).json({ message: 'Validation failed', errors });
      }
      const updatedRoutine = await RoutineService.updateRoutine(
        routineId,
        routine,
      );
      res.status(200).json(updatedRoutine);
    } catch {
      res.status(500).send('Error updating routine');
    }
  },

  async deleteRoutine(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deleted = await RoutineService.deleteRoutine(id);
      if (!deleted) {
        return res.status(404).json({ message: 'Routine not found' });
      }
      res.status(200).json({ message: 'Routine deleted successfully' });
    } catch (error) {
      res.status(500).send(error);
    }
  },
};
