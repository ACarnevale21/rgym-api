import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../application/utils/jwt.util';
import { JwtPayload } from 'jsonwebtoken';

declare module 'express-serve-static-core' {
  interface Request {
    user?: string | JwtPayload;
  }
}

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['cookie'].split('=')[1];
  if (!token) {
    return res.status(401).send('Access denied. No token provided.');
  }
  try {
    const decoded = verifyToken(token);
    req.user = decoded;
    next();
  } catch {
    res.status(400).send('Invalid token');
  }
};

export default authMiddleware;
