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
};

export default UserController;
