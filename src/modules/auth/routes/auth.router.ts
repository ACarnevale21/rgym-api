import { Router } from 'express';
import { AuthController } from '../controller/auth.controller';

const authNavigation = Router();

authNavigation.post('/login', AuthController.login);
authNavigation.post('/login/trainer', AuthController.loginTrainer);

export default authNavigation;
