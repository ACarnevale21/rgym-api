import { createError } from '@/modules/common/application/utils/common.utils';

export const UserError = {
  userNotFound: createError(
    404,
    'User not found',
    'The requested user does not exist in the database.',
  ),
  userAlreadyExists: createError(
    409,
    'User already exists',
    'A user with the provided email already exists. Please use a different email address.',
  ),
  userByEmailError: createError(
    500,
    'Error retrieving user by email',
    'An error occurred while trying to retrieve the user by email. Please try again later.',
  ),
  errorUserNotFound: createError(
    404,
    'Error, user not found',
    'An error occurred while processing your request. The user could not be found.',
  ),
  validationFailed: createError(
    400,
    'Validation failed',
    'The provided user data failed validation. Please check the input and try again.',
  ),
};
