export class LoginResponseDto {
  accessToken: string;
  expiresIn: string;
  user: {
    email: string;
    name: string;
  };
}
