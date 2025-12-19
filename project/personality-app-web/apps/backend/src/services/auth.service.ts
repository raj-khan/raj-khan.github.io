import prisma from '../config/database';
import { hashPassword, verifyPassword } from '../utils/password';
import { generateTokens, TokenPayload } from '../utils/jwt';
import { AuthError, ERROR_MESSAGES } from '../constants/errors';
import logger from '../config/logger';
import { RegisterInput, LoginInput } from '../utils/validation';

export class AuthService {
  async register(data: RegisterInput) {
    const { email, password, name } = data;

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new AuthError('AUTH_EMAIL_ALREADY_EXISTS', 'AUTH_EMAIL_ALREADY_EXISTS', 409);
    }

    // Hash password
    const hashedPassword = await hashPassword(password);

    // Create user
    const user = await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
      },
      select: {
        id: true,
        email: true,
        name: true,
        image: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    // Generate tokens
    const tokens = generateTokens({
      userId: user.id,
      email: user.email,
    });

    logger.info(`New user registered: ${email}`);

    return {
      user,
      ...tokens,
    };
  }

  async login(data: LoginInput) {
    const { email, password } = data;

    // Find user
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user || !user.password) {
      throw new AuthError('AUTH_INVALID_CREDENTIALS', 'AUTH_INVALID_CREDENTIALS');
    }

    // Verify password
    const isPasswordValid = await verifyPassword(password, user.password);

    if (!isPasswordValid) {
      logger.warn(`Failed login attempt for email: ${email}`);
      throw new AuthError('AUTH_INVALID_CREDENTIALS', 'AUTH_INVALID_CREDENTIALS');
    }

    // Generate tokens
    const tokens = generateTokens({
      userId: user.id,
      email: user.email,
    });

    logger.info(`User logged in: ${email}`);

    return {
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        image: user.image,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
      ...tokens,
    };
  }

  async getUserById(userId: string) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        name: true,
        image: true,
        emailVerified: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!user) {
      throw new AuthError('AUTH_USER_NOT_FOUND', 'AUTH_USER_NOT_FOUND', 404);
    }

    return user;
  }

  async updateProfile(userId: string, data: { name?: string; image?: string }) {
    const user = await prisma.user.update({
      where: { id: userId },
      data,
      select: {
        id: true,
        email: true,
        name: true,
        image: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    logger.info(`User profile updated: ${user.email}`);

    return user;
  }

  async changePassword(userId: string, currentPassword: string, newPassword: string) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user || !user.password) {
      throw new AuthError('AUTH_USER_NOT_FOUND', 'AUTH_USER_NOT_FOUND', 404);
    }

    // Verify current password
    const isPasswordValid = await verifyPassword(currentPassword, user.password);

    if (!isPasswordValid) {
      throw new AuthError('AUTH_INVALID_CREDENTIALS', 'AUTH_INVALID_CREDENTIALS');
    }

    // Hash new password
    const hashedPassword = await hashPassword(newPassword);

    // Update password
    await prisma.user.update({
      where: { id: userId },
      data: { password: hashedPassword },
    });

    logger.info(`Password changed for user: ${user.email}`);

    return { message: 'Password changed successfully' };
  }
}

export const authService = new AuthService();
