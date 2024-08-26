import { createError } from '@/common/application/utils/common.utils';

export const TrainerError = {
  trainerNotFound: createError(
    404,
    'Trainer not found',
    'The requested Trainer does not exist in the database.',
  ),
  trainerAlreadyExists: createError(
    409,
    'Trainer already exists',
    'A Trainer with the provided email already exists. Please use a different email address.',
  ),
  trainerByEmailError: createError(
    500,
    'Error retrieving Trainer by email',
    'An error occurred while trying to retrieve the Trainer by email. Please try again later.',
  ),
  errorTrainerNotFound: createError(
    404,
    'Error, Trainer not found',
    'An error occurred while processing your request. The Trainer could not be found.',
  ),
  validationFailed: createError(
    400,
    'Validation failed',
    'The provided Trainer data failed validation. Please check the input and try again.',
  ),
};
