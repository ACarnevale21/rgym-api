import { createError } from '@/modules/common/application/utils/common.utils';

export const AuthError = {
  noTokenProvided: createError(
    401,
    'Access denied. No token provided.',
    'No token was provided in the request.',
  ),
  invalidToken: createError(
    400,
    'Invalid token',
    'The provided token is invalid. Please provide a valid token.',
  ),
};
