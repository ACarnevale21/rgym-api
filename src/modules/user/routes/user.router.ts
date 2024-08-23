import express from 'express';
import { UserController } from '../controller/user.controller';
import authMiddleware from './auth.middleware'; // Ensure correct import path

const router = express.Router();

router.get('/users', authMiddleware, UserController.getUserList);
router.post('/login', UserController.login);

export default router;
