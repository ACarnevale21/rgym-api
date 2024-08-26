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

export const isPublicPath = (path: string): boolean => {
  const publicPaths = [
    '/api/login',
    '/api/trainer-register',
    '/api/user-register',
  ];
  return publicPaths.includes(path);
};
