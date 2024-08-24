import { User } from '@/modules/modules';
import { UserSchemaType } from '../../infrastructure/entities/user.schema';
import { IUser } from '../interface/user.interface';
import { CreateUserRequestDto } from '../dto/request/create-user.dto';

export const newUserMapper = (user: CreateUserRequestDto): UserSchemaType => {
  const newUser = new User();
  newUser.name = user.name;
  newUser.password = user.password;
  newUser.email = user.email;
  newUser.goal = user.goal;
  newUser.age = user.age;
  newUser.weight = user.weight;
  newUser.height = user.height;
  return newUser;
};

export const updateUserMapper = (
  user: UserSchemaType,
  updatedUser: Partial<IUser>,
): UserSchemaType => {
  user.name = updatedUser.name;
  user.email = updatedUser.email;
  user.password = updatedUser.password;
  user.age = updatedUser.age;
  user.weight = updatedUser.weight;
  user.height = updatedUser.height;
  user.goal = updatedUser.goal;
  return user;
};
