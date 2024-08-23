import { UserService } from '../application/service/user.service';
import { Request, Response } from 'express';

export const UserController = {
  async getUserList(req: Request, res: Response) {
    try {
      const sad = req.body;
      console.log(sad);
      const userList = await UserService.getUserList();
      res.status(200).json(userList);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  async login(req: Request, res: Response) {
    try {
      const { name, password } = req.body;
      const { token, user } = await UserService.authenticateUser(
        name,
        password,
      );
      res.status(200).json({ token, user });
    } catch (error) {
      res.status(401).send(error);
    }
  },
};
