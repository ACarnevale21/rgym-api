import { User } from '../../../modules';
import { UserSchemaType } from '../entities/user.schema';

export const UserRepository = {
  async getUserList(): Promise<UserSchemaType[]> {
    return await User.find() as UserSchemaType[];
  },
  async getUserById(id: string): Promise<UserSchemaType | null> {
    try {
      return await User.findById(id) as UserSchemaType | null;
    } catch {
      throw new Error('Error, user not found');
    }
  },
  async createUser(user: Partial<UserSchemaType>): Promise<UserSchemaType> {
    return await User.create(user) as UserSchemaType;
  },
  async updateUser(user: UserSchemaType): Promise<UserSchemaType | null> {
    return await User.findByIdAndUpdate(user.id, user, {
      new: true,
    }) as UserSchemaType | null;
  },
  async deleteUser(id: string): Promise<UserSchemaType | null> {
    return await User.findByIdAndDelete(id) as UserSchemaType | null;
  },
  async getUserByEmail(email: string): Promise<UserSchemaType | null> {
    try {
      return await User.findOne({ email }) as UserSchemaType | null;
    } catch (error) {
      console.error(error);
      throw new Error('Error getting user by email');
    }
  },
};
