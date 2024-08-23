import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../../jwt.util';
import { JwtPayload } from 'jsonwebtoken';

// Extensión de la interfaz Request para que ts detecte el user en el request
declare module 'express-serve-static-core' {
  interface Request {
    user?: string | JwtPayload;
  }
}

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['authorization'];
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
