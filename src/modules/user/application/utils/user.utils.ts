import { User } from '@/modules/modules';
import { CreateUserRequestDto } from '../dto/request/create-user.dto';
import { UserSchemaType } from '../../infrastructure/entities/user.schema';
import { UpdateUserRequestDto } from '../dto/request/update-user.dto';

export const newUserMapper = (user: CreateUserRequestDto): UserSchemaType => {
  const newUser = new User();
  newUser.name = user.name;
  newUser.password = user.password;
  newUser.email = user.email;
  newUser.role = 'user';
  return newUser;
};

export const updateUserMapper = (
  user: UserSchemaType,
  updatedUser: UpdateUserRequestDto,
): UserSchemaType => {
  user.name = updatedUser.name;
  user.email = updatedUser.email;
  user.password = updatedUser.password;
  user.description = updatedUser.description;
  user.routine = updatedUser.routine;

  return user;
};
