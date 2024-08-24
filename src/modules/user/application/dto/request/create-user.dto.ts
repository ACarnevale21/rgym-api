import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
import { UserGoal } from '../../enum/user-goal.enum';

export class CreateUserRequestDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsNumber()
  @IsNotEmpty()
  age: number;

  @IsNumber()
  @IsNotEmpty()
  weight: number;

  @IsNumber()
  @IsNotEmpty()
  height: number;

  @IsString()
  @IsNotEmpty()
  goal: UserGoal;
}
