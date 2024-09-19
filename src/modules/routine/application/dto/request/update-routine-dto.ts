import { IsString, IsOptional, IsArray } from 'class-validator';

export class UpdateRoutineRequestDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsArray()
  @IsOptional()
  exercises?: {
    exerciseId: string;

    sets: number;

    reps: number;

    rest: number;
  }[];

  @IsString()
  @IsOptional()
  createdBy?: string;
}
