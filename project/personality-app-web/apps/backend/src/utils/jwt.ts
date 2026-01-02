import jwt from 'jsonwebtoken';
import { AuthError } from '../constants/errors';

const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-in-production';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d';
const REFRESH_TOKEN_EXPIRES_IN = process.env.REFRESH_TOKEN_EXPIRES_IN || '30d';

export interface TokenPayload {
  userId: string;
  email: string;
}

export function generateAccessToken(payload: TokenPayload): string {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
  });
}

export function generateRefreshToken(payload: TokenPayload): string {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: REFRESH_TOKEN_EXPIRES_IN,
  });
}

export function verifyToken(token: string): TokenPayload {
  try {
    return jwt.verify(token, JWT_SECRET) as TokenPayload;
  } catch (error) {
    throw new AuthError('AUTH_INVALID_TOKEN', 'AUTH_INVALID_TOKEN');
  }
}

export function generateTokens(payload: TokenPayload) {
  return {
    accessToken: generateAccessToken(payload),
    refreshToken: generateRefreshToken(payload),
  };
}
