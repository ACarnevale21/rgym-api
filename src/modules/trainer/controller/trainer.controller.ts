import { TrainerService } from '../application/service/trainer.service';
import { Request, Response } from 'express';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { CreateTrainerRequestDto } from '../application/dto/request/create-trainer.dto';
import { TrainerError } from '../application/error/trainer.error';
import { UpdateTrainerRequestDto } from '../application/dto/request/update-trainer.dto';

export const TrainerController = {
  async getTrainerList(req: Request, res: Response) {
    try {
      const trainerList = await TrainerService.getTrainerList();
      res.status(200).json(trainerList);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  async createTrainer(req: Request, res: Response) {
    try {
      const trainer = plainToClass(CreateTrainerRequestDto, req.body);
      const errors = await validate(trainer);

      if (errors.length > 0) {
        return res.status(400).json({ message: 'Validation failed', errors });
      }
      const newTrainer = await TrainerService.createTrainer(trainer);
      res.status(201).json(newTrainer);
    } catch {
      res.status(500).send(TrainerError.trainerAlreadyExists);
    }
  },
  async getTrainerById(req: Request, res: Response) {
    try {
      const trainer = await TrainerService.getTrainerById(req.params.id);
      res.status(200).json(trainer);
    } catch {
      res.status(404).json(TrainerError.errorTrainerNotFound);
    }
  },
  async updateTrainer(req: Request, res: Response) {
    try {
      const trainer = plainToClass(UpdateTrainerRequestDto, req.body);
      const errors = await validate(trainer);

      const trainerId = req.params.id;

      if (errors.length > 0) {
        return res.status(400).json({ message: 'Validation failed', errors });
      }
      const updatedTrainer = await TrainerService.updateTrainer(
        trainerId,
        trainer,
      );
      res.status(200).json(updatedTrainer);
    } catch {
      res.status(500).send(TrainerError.errorTrainerNotFound);
    }
  },

  async deleteTrainer(req: Request, res: Response) {
    try {
      await TrainerService.deleteTrainer(req.params.id);
      res.status(204).send();
    } catch {
      res.status(500).send(TrainerError.errorTrainerNotFound);
    }
  },
};
