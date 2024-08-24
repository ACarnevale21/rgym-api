import { UserRepository } from '../../infrastructure/persistence/user.repository';
import bcrypt from 'bcryptjs';
import { CreateUserRequestDto } from '../dto/request/create-user.dto';
import { newUserMapper, updateUserMapper } from '../utils/user.utils';
import { UpdateUserRequestDto } from '../dto/request/update-user.dto';
import { IUser } from '../interface/user.interface';

export const UserService = {
  async getUserList() {
    return await UserRepository.getUserList();
  },
  async getUserById(id: string) {
    return await UserRepository.getUserById(id);
  },
  async createUser(user: CreateUserRequestDto): Promise<IUser> {
    const userExists = await UserRepository.getUserByEmail(user.email);

    if (userExists) {
      throw new Error('User already exists');
    }

    const newUserMapped = newUserMapper(user);

    newUserMapped.password = await bcrypt.hash(user.password, 10);

    return await UserRepository.createUser(newUserMapped);
  },
  async updateUser(
    userId: string,
    updatedUserInformation: UpdateUserRequestDto,
  ) {
    const userExists = await UserRepository.getUserById(userId);
    const userMapped = updateUserMapper(userExists, updatedUserInformation);

    return await UserRepository.updateUser(userMapped);
  },
  async deleteUser(id: string) {
    return await UserRepository.deleteUser(id);
  },
  async getUserByEmail(email: string) {
    return await UserRepository.getUserByEmail(email);
  },
};
