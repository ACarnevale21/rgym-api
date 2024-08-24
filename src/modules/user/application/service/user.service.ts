import { UserSchemaType } from '../../infrastructure/entities/user.schema';
import { UserRepository } from '../../infrastructure/persistence/user.repository';
import bcrypt from 'bcryptjs';
import { CreateUserRequestDto } from '../dto/request/create-user.dto';
import { newUserMapper } from '../utils/user.utils';
import { generateToken } from '@/modules/jwt.util';
import { LoginResponseDto } from '../dto/response/login.response.dto';

export const UserService = {
  async getUserList() {
    return await UserRepository.getUserList();
  },
  async getUserById(id: string) {
    return await UserRepository.getUserById(id);
  },
  async createUser(user: CreateUserRequestDto) {
    const userExists = await UserRepository.getUserByEmail(user.email);

    if (userExists) {
      return { message: 'User already exists' };
    }

    const newUserMapped = newUserMapper(user);

    newUserMapped.password = await bcrypt.hash(user.password, 10);

    return await UserRepository.createUser(newUserMapped);
  },
  async updateUser(user: UserSchemaType) {
    return await UserRepository.updateUser(user);
  },
  async deleteUser(id: string) {
    return await UserRepository.deleteUser(id);
  },
  async authenticateUser(
    email: string,
    password: string,
  ): Promise<LoginResponseDto> {
    const user = await UserRepository.getUserByEmail(email);
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
