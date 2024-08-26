import { RoutineService } from '../application/service/routine.service';
import { Request, Response } from 'express';

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
      const { name, description, videoUrl, id, createdAt, updatedAt, _id } =
        req.body;

      const routine = {
        name,
        description,
        videoUrl,
        id,
        createdAt,
        updatedAt,
        _id,
      };

      const newRoutine = await RoutineService.createRoutine(routine);
      res.status(201).json(newRoutine);
    } catch (error) {
      res.status(500).send({ message: 'Routine already exists', error });
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
      const { id } = req.params;
      const { name, description, videoUrl, createdAt, updatedAt, _id } =
        req.body;

      // Assuming the routine service expects an object with these properties
      const routine = {
        name,
        description,
        videoUrl,
        id,
        createdAt,
        updatedAt,
        _id,
      };

      const updatedRoutine = await RoutineService.updateRoutine(id, routine);
      if (!updatedRoutine) {
        return res.status(404).json({ message: 'Routine not found' });
      }
      res.status(200).json(updatedRoutine);
    } catch (error) {
      res.status(500).send(error);
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
