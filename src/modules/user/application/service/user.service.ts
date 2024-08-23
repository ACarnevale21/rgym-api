import { UserSchemaType } from '../../infrastructure/entities/user.schema';
import { UserRepository } from '../../infrastructure/persistence/user.repository';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const JWT_SECRET = (process.env.JWT_SECRET as string) || 'aguanteboca';

export const UserService = {
  async getUserList() {
    return await UserRepository.getUserList();
  },
  async getUserById(id: string) {
    return await UserRepository.getUserById(id);
  },
  async createUser(user: UserSchemaType) {
    const userExists = await UserRepository.getUserById(user.id);
    if (userExists) {
      return { message: 'User already exists' };
    }
    user.password = await bcrypt.hash(user.password, 10);
    return await UserRepository.createUser(user);
  },
  async updateUser(user: UserSchemaType) {
    return await UserRepository.updateUser(user);
  },
  async deleteUser(id: string) {
    return await UserRepository.deleteUser(id);
  },
  async authenticateUser(id: string, password: string) {
    const user = await UserRepository.getUserById(id);
    if (!user) {
      throw new Error('User not found');
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error('Invalid password');
    }
    if (!JWT_SECRET) {
      throw new Error('JWT_SECRET is not defined');
    }
    const token = jwt.sign({ id: user.id }, JWT_SECRET, {
      expiresIn: '1h',
    });
    return { token, user };
  },
};
