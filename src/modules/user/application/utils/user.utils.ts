import { User } from '@/modules/modules';
import { CreateUserRequestDto } from '../dto/request/create-user.dto';
import { UserSchemaType } from '../../infrastructure/entities/user.schema';

export const newUserMapper = (user: CreateUserRequestDto): UserSchemaType => {
  const newUser = new User();
  newUser.name = user.name;
  newUser.password = user.password;
  newUser.email = user.email;
  return newUser;
};
