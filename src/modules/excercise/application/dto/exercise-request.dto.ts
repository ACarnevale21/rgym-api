import { IsNotEmpty, IsString } from 'class-validator';

export class ExerciseRequestDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  muscleGroup: string;

  @IsString()
  videoUrl: string;

  @IsString()
  imageUrl: string;
}
