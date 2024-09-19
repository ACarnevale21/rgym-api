import { IsString, IsOptional, IsArray, IsNumber } from 'class-validator';

export class UpdateRoutineRequestDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsArray()
  @IsOptional()
  exercises: string[];

  @IsNumber()
  @IsOptional()
  sets?: number;

  @IsNumber()
  @IsOptional()
  reps?: number;

  @IsNumber()
  @IsOptional()
  rest?: number;

  @IsString()
  @IsOptional()
  createdBy?: string;
}
