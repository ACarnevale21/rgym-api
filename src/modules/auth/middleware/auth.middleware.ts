import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../application/utils/jwt.util';
import { JwtPayload } from 'jsonwebtoken';
import { AuthError } from '../application/error/auth.error';

declare module 'express-serve-static-core' {
  interface Request {
    user?: string | JwtPayload;
  }
}

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
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
};

export default authMiddleware;
