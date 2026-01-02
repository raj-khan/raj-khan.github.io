import { Request, Response, NextFunction } from 'express';
import { authService } from '../services/auth.service';
import { loginSchema, registerSchema, changePasswordSchema } from '../utils/validation';
import { AuthenticatedRequest } from '../middleware/auth';
import { generateTokens } from '../utils/jwt';
import logger from '../config/logger';

export class AuthController {
  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const validatedData = registerSchema.parse(req.body);
      const result = await authService.register(validatedData);

      res.status(201).json({
        success: true,
        message: 'User registered successfully',
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const validatedData = loginSchema.parse(req.body);
      const result = await authService.login(validatedData);

      res.status(200).json({
        success: true,
        message: 'Login successful',
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  async getProfile(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      if (!req.user) {
        return res.status(401).json({
          success: false,
          message: 'Unauthorized',
        });
      }

      const user = await authService.getUserById(req.user.id);

      res.status(200).json({
        success: true,
        data: user,
      });
    } catch (error) {
      next(error);
    }
  }

  async updateProfile(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      if (!req.user) {
        return res.status(401).json({
          success: false,
          message: 'Unauthorized',
        });
      }

      const { name, image } = req.body;
      const user = await authService.updateProfile(req.user.id, { name, image });

      res.status(200).json({
        success: true,
        message: 'Profile updated successfully',
        data: user,
      });
    } catch (error) {
      next(error);
    }
  }

  async changePassword(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    try {
      if (!req.user) {
        return res.status(401).json({
          success: false,
          message: 'Unauthorized',
        });
      }

      const validatedData = changePasswordSchema.parse(req.body);
      const result = await authService.changePassword(
        req.user.id,
        validatedData.currentPassword,
        validatedData.newPassword
      );

      res.status(200).json({
        success: true,
        message: result.message,
      });
    } catch (error) {
      next(error);
    }
  }

  async googleCallback(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) {
        return res.redirect(`${process.env.FRONTEND_URL}/auth/error`);
      }

      const user = req.user as any;
      const tokens = generateTokens({
        userId: user.id,
        email: user.email,
      });

      logger.info(`Google OAuth successful for user: ${user.email}`);

      // Redirect to frontend with token
      res.redirect(
        `${process.env.FRONTEND_URL}/auth/callback?token=${tokens.accessToken}`
      );
    } catch (error) {
      next(error);
    }
  }

  async facebookCallback(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.user) {
        return res.redirect(`${process.env.FRONTEND_URL}/auth/error`);
      }

      const user = req.user as any;
      const tokens = generateTokens({
        userId: user.id,
        email: user.email,
      });

      logger.info(`Facebook OAuth successful for user: ${user.email}`);

      // Redirect to frontend with token
      res.redirect(
        `${process.env.FRONTEND_URL}/auth/callback?token=${tokens.accessToken}`
      );
    } catch (error) {
      next(error);
    }
  }
}

export const authController = new AuthController();
