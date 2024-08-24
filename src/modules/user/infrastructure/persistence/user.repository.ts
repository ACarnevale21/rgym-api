import { User } from '../../../modules';
import { UserSchemaType } from '../entities/user.schema';

export const UserRepository = {
  async getUserList() {
    return await User.find();
  },
  async getUserById(id: string) {
    try {
      return await User.findById(id);
    } catch {
      throw new Error('Error, user not found');
    }
  },
  async createUser(user: UserSchemaType) {
    return await User.create(user);
  },
  async updateUser(user: UserSchemaType) {
    return await User.findByIdAndUpdate(user.id, user, {
      new: true,
    });
  },
  async deleteUser(id: string) {
    return await User.findByIdAndDelete(id);
  },

  async getUserByEmail(email: string) {
    try {
      return await User.findOne({ email });
    } catch (error) {
      console.error(error);
      throw new Error('Error getting user by email');
    }
  },
};
