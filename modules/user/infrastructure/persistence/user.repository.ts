import { connectDatabase } from '../../../../db.connection';
import { User } from '../../../modules';
import { UserSchemaType } from '../entities/user.schema';

export const UserRepository = {
  async getUserList() {
    await connectDatabase();
    return await User.find();
  },
  async getUserById(id: string) {
    await connectDatabase();
    return await User.findById(id);
  },
  async createUser(user: UserSchemaType) {
    await connectDatabase();
    return await User.create(user);
  },
  async updateUser(user: UserSchemaType) {
    await connectDatabase();
    return await User.findByIdAndUpdate(user.id, user, {
      new: true,
    });
  },
  async deleteUser(id: string) {
    await connectDatabase();
    return await User.findByIdAndDelete(id);
  },
};
