import { Router } from 'express';
import { UserController } from '../controller/user.controller';
import authMiddleware from '../../auth/middleware/auth.middleware';

const userNavigation = Router();

userNavigation.post('/user', UserController.createUser);
userNavigation.get('/user', authMiddleware, UserController.getUserList);

export default userNavigation;
