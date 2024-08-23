import { Router } from 'express';
import { UserController } from '../controller/user.controller';
import authMiddleware from './auth.middleware'; // Ensure correct import path

const userNavigation = Router();

userNavigation.get('/users', authMiddleware, UserController.getUserList);
userNavigation.post('/login', UserController.login);
userNavigation.post('/users', UserController.createUser);

export default userNavigation;
