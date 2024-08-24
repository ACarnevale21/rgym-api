import { UserGoal } from '../../enum/user-goal.enum';

export class UpdateUserRequestDto {
  name?: string;
  email?: string;
  password?: string;
  age?: number;
  weight?: number;
  height?: number;
  goal?: UserGoal;
}
