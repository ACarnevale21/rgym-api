import { UserService } from '../application/service/user.service';
import { Request, Response } from 'express';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { CreateUserRequestDto } from '../application/dto/request/create-user.dto';
import { UserError } from '../application/error/user.error';

export const UserController = {
  async getUserList(req: Request, res: Response) {
    try {
      const userList = await UserService.getUserList();
      res.status(200).json(userList);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  async createUser(req: Request, res: Response) {
    try {
      const user = plainToClass(CreateUserRequestDto, req.body);
      const errors = await validate(user);

      if (errors.length > 0) {
        return res.status(400).json({ message: 'Validation failed', errors });
      }
      const newUser = await UserService.createUser(user);
      res.status(201).json(newUser);
    } catch {
      res.status(500).send(UserError.userAlreadyExists);
    }
  },
  async getUserById(req: Request, res: Response) {
    try {
      const user = await UserService.getUserById(req.params.id);
      res.status(200).json(user);
    } catch {
      res.status(404).json(UserError.errorUserNotFound);
    }
  },
};
