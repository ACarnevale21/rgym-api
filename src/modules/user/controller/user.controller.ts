import { UserService } from '../application/service/user.service';
import { Request, Response } from 'express';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { CreateUserRequestDto } from '../application/dto/request/create-user.dto';

export const UserController = {
  async getUserList(req: Request, res: Response) {
    try {
      const userList = await UserService.getUserList();
      res.status(200).json(userList);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const response = await UserService.authenticateUser(email, password);
      res.status(200).json(response);
    } catch (error) {
      res.status(401).send(error);
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
    } catch (error) {
      res.status(500).send(error);
    }
  },
};
