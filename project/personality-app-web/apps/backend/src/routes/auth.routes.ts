import { Router } from 'express';
import passport from 'passport';
import { authController } from '../controllers/auth.controller';
import { authenticate } from '../middleware/auth';

const router = Router();

// Local authentication
router.post('/register', authController.register.bind(authController));
router.post('/login', authController.login.bind(authController));

// Profile management
router.get('/profile', authenticate, authController.getProfile.bind(authController));
router.put('/profile', authenticate, authController.updateProfile.bind(authController));
router.post('/change-password', authenticate, authController.changePassword.bind(authController));

// Google OAuth
router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'], session: false })
);
router.get(
  '/google/callback',
  passport.authenticate('google', { session: false }),
  authController.googleCallback.bind(authController)
);

// Facebook OAuth
router.get(
  '/facebook',
  passport.authenticate('facebook', { scope: ['email'], session: false })
);
router.get(
  '/facebook/callback',
  passport.authenticate('facebook', { session: false }),
  authController.facebookCallback.bind(authController)
);

export default router;
