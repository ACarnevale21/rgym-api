import { UserService } from '@/modules/user/application/service/user.service';
import { generateToken } from '../utils/jwt.util';
import { LoginResponseDto } from '../dto/response/login.response.dto';
import bcrypt from 'bcryptjs';

export const AuthService = {
  async authenticateUser(
    email: string,
    password: string,
  ): Promise<LoginResponseDto> {
    const user = await UserService.getUserByEmail(email);
    if (!user) {
      throw new Error('User not found');
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new Error('Invalid password');
    }

    const token = generateToken({
      email: user.email,
      name: user.name,
    });

    const response = new LoginResponseDto();
    response.accessToken = token;
    response.expiresIn = '1h';
    response.user = {
      email: user.email,
      name: user.name,
    };
    return response;
  },
};
