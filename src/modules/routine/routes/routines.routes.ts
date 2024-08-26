import { Router } from 'express';
import { RoutineController } from '../controller/routine.controller';
import authMiddleware from '@/modules/auth/middleware/auth.middleware';

const routineNavigation = Router();

routineNavigation.post(
  '/routine',
  authMiddleware,
  RoutineController.createRoutine,
);
routineNavigation.get(
  '/routine',
  authMiddleware,
  RoutineController.getRoutineList,
);
routineNavigation.get(
  '/routine/:id',
  authMiddleware,
  RoutineController.getRoutineById,
);
routineNavigation.patch(
  '/routine/:id',
  authMiddleware,
  RoutineController.updateRoutine,
);
routineNavigation.delete(
  '/routine/:id',
  authMiddleware,
  RoutineController.deleteRoutine,
);

export default routineNavigation;
