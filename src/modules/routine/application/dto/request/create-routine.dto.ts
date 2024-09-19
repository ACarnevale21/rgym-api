import { IsString, IsNotEmpty, IsArray } from 'class-validator';

export class CreateRoutineRequestDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsArray()
  @IsNotEmpty()
  exercises: {
    exerciseId: string;
    sets: number;
    reps: number;
    rest: number;
  }[];

  @IsString()
  @IsNotEmpty()
  createdBy: string;
}
