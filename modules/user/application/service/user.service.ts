import { UserSchemaType } from '../../infrastructure/entities/user.schema';
import { UserRepository } from '../../infrastructure/persistence/user.repository';

export const UserService = {
  async getUserList() {
    return await UserRepository.getUserList();
  },
  async getUserById(id: string) {
    return await UserRepository.getUserById(id);
  },
  async createUser(user: UserSchemaType) {
    return await UserRepository.createUser(user);
  },
  async updateUser(user: UserSchemaType) {
    return await UserRepository.updateUser(user);
  },
  async deleteUser(id: string) {
    return await UserRepository.deleteUser(id);
  },
};
