import { IsString, IsNotEmpty } from 'class-validator';

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
}
