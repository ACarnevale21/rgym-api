export class LoginResponseDto {
  accessToken: string;
  expiresIn: string;
  user: {
    email: string;
    name: string;
  };
}

export class LoginTrainerResponseDto {
  accessToken: string;
  expiresIn: string;
  trainer: {
    email: string;
    name: string;
  };
}
