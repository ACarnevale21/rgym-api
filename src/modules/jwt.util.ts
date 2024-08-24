import jwt from 'jsonwebtoken';

interface Payload {
  name: string;
  email: string;
}

export const generateToken = (payload: Payload) => {
  try {
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
  } catch {
    throw new Error('Error generating token');
  }
};
 
export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch {
    throw new Error('Invalid token');
  }
};
