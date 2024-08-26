import { createError } from '@/common/application/utils/common.utils';

export const ExerciseError = {
  exerciseNotFound: createError(
    404,
    'Exercise not found',
    'The requested exercise does not exist in the database.',
  ),
  exerciseAlreadyExists: createError(
    409,
    'Exercise already exists',
    'The exercise already exists in the database.',
  ),
  exerciseNotCreated: createError(
    500,
    'Exercise not created',
    'Failed to create the exercise.',
  ),
  exerciseNotUpdated: createError(
    500,
    'Exercise not updated',
    'Failed to update the exercise.',
  ),
  exerciseNotDeleted: createError(
    500,
    'Exercise not deleted',
    'Failed to delete the exercise.',
  ),
  exerciseNotRetrieved: createError(
    500,
    'Exercise not retrieved',
    'Failed to retrieve the exercise.',
  ),
};
