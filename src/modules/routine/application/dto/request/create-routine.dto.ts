import { IsString, IsNotEmpty, IsArray, IsNumber } from 'class-validator';

export class CreateRoutineRequestDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsArray()
  @IsNotEmpty()
  exercises: string[];

  @IsNumber()
  @IsNotEmpty()
  sets: number;

  @IsNumber()
  @IsNotEmpty()
  reps: number;

  @IsNumber()
  @IsNotEmpty()
  rest: number;

  @IsString()
  @IsNotEmpty()
  createdBy: string;
}
