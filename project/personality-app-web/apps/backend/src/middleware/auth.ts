import { Request, Response, NextFunction } from 'express';
import passport from 'passport';
import { AuthError } from '../constants/errors';
import logger from '../config/logger';

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    name: string | null;
    image: string | null;
    createdAt: Date;
    updatedAt: Date;
  };
}

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate('jwt', { session: false }, (err: Error, user: Express.User) => {
    if (err) {
      logger.error('Authentication error:', err);
      return next(err);
    }

    if (!user) {
      return next(new AuthError('AUTH_UNAUTHORIZED', 'AUTH_UNAUTHORIZED'));
    }

    req.user = user;
    next();
  })(req, res, next);
};

export const optionalAuthenticate = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate('jwt', { session: false }, (err: Error, user: Express.User) => {
    if (user) {
      req.user = user;
    }
    next();
  })(req, res, next);
};
