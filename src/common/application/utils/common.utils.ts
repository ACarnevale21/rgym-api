import { IError } from '../interface/error.interface';

export const createError = (
  code: number,
  message: string,
  detail?: string,
): IError => ({
  code,
  message,
  detail: detail || message,
});
