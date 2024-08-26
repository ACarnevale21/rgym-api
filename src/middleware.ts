import { Request, Response, NextFunction } from 'express';
import { verifyToken } from './modules/auth/application/utils/jwt.util';
import { JwtPayload } from 'jsonwebtoken';
import { AuthError } from './modules/auth/application/error/auth.error';
import { isPublicPath } from './common/application/utils/common.utils';

declare module 'express-serve-static-core' {
  interface Request {
    user?: string | JwtPayload;
  }
}

export async function middleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  if (isPublicPath(req.path)) {
    return next();
  }

  if (!req.headers['cookie']) {
    return res.send(AuthError.noTokenProvided);
  }
  const token = req.headers['cookie'].split('=')[1];
  if (!token) {
    return res.send(AuthError.noTokenProvided);
  }
  try {
    const decoded = verifyToken(token);
    req.user = decoded;
    next();
  } catch {
    res.send(AuthError.invalidToken);
  }
}

export const config = {
  matcher: ['/'],
};
