import { Request, Response } from 'express';
import { AuthService } from '../application/service/auth.service';

export const AuthController = {
  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const response = await AuthService.authenticateUser(email, password);

      res.cookie('token', response.accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 3600000,
        sameSite: 'strict',
      });

      res.status(200).json(response);
    } catch (error) {
      res.status(401).send(error);
    }
  },
};
