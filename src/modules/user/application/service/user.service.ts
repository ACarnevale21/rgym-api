import { UserSchemaType } from '../../infrastructure/entities/user.schema';
import { UserRepository } from '../../infrastructure/persistence/user.repository';
import bcrypt from 'bcryptjs';
import { CreateUserRequestDto } from '../dto/request/create-user.dto';
import { newUserMapper } from '../utils/user.utils';

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
  async getUserByEmail(email: string) {
    return await UserRepository.getUserByEmail(email);
  },
};
