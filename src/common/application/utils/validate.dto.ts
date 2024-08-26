import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { IError } from '../interface/error.interface';

export async function validateDto<T extends object>(
  dtoClass: new () => T,
  plainObject: object,
): Promise<T | IError> {
  const dto = plainToClass(dtoClass, plainObject);
  const errors = await validate(dto);

  if (errors.length > 0) {
    throw new Error(`Validation failed: ${errors}`);
  }

  return dto;
}
