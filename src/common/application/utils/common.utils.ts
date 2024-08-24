export const createError = (
  code: number,
  message: string,
  detail?: string,
) => ({
  code,
  message,
  detail: detail || message,
});
