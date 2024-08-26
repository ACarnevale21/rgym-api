import { Router } from 'express';
import { UserController } from '../controller/user.controller';

const userNavigation = Router();

userNavigation.post('/user-register', UserController.createUser);
userNavigation.get('/user', UserController.getUserList);
userNavigation.get('/user/:id', UserController.getUserById);
userNavigation.patch('/user/:id', UserController.updateUser);
userNavigation.delete('/user/:id', UserController.deleteUser);

export default userNavigation;
