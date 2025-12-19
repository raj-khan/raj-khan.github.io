import { describe, it, expect, beforeEach, vi } from 'vitest';
import { authService } from '../auth.service';
import prisma from '../../config/database';
import * as passwordUtils from '../../utils/password';

vi.mock('../../config/database', () => ({
  default: {
    user: {
      findUnique: vi.fn(),
      create: vi.fn(),
      update: vi.fn(),
    },
  },
}));

vi.mock('../../utils/password');
vi.mock('../../config/logger', () => ({
  default: {
    info: vi.fn(),
    error: vi.fn(),
    warn: vi.fn(),
  },
}));

describe('AuthService', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('register', () => {
    it('should register a new user successfully', async () => {
      const mockUser = {
        id: '123',
        email: 'test@example.com',
        name: 'Test User',
        image: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      vi.mocked(prisma.user.findUnique).mockResolvedValue(null);
      vi.mocked(prisma.user.create).mockResolvedValue({
        ...mockUser,
        password: 'hashed_password',
        emailVerified: null,
      });
      vi.mocked(passwordUtils.hashPassword).mockResolvedValue('hashed_password');

      const result = await authService.register({
        email: 'test@example.com',
        password: 'Password123!',
        confirmPassword: 'Password123!',
        name: 'Test User',
      });

      expect(result).toHaveProperty('user');
      expect(result).toHaveProperty('accessToken');
      expect(result).toHaveProperty('refreshToken');
      expect(result.user.email).toBe('test@example.com');
    });

    it('should throw error if email already exists', async () => {
      vi.mocked(prisma.user.findUnique).mockResolvedValue({
        id: '123',
        email: 'test@example.com',
        name: 'Existing User',
        password: 'hashed',
        image: null,
        emailVerified: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      await expect(
        authService.register({
          email: 'test@example.com',
          password: 'Password123!',
          confirmPassword: 'Password123!',
          name: 'Test User',
        })
      ).rejects.toThrow('An account with this email already exists');
    });
  });

  describe('login', () => {
    it('should login user with valid credentials', async () => {
      const mockUser = {
        id: '123',
        email: 'test@example.com',
        name: 'Test User',
        password: 'hashed_password',
        image: null,
        emailVerified: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      vi.mocked(prisma.user.findUnique).mockResolvedValue(mockUser);
      vi.mocked(passwordUtils.verifyPassword).mockResolvedValue(true);

      const result = await authService.login({
        email: 'test@example.com',
        password: 'Password123!',
      });

      expect(result).toHaveProperty('user');
      expect(result).toHaveProperty('accessToken');
      expect(result).toHaveProperty('refreshToken');
      expect(result.user.email).toBe('test@example.com');
    });

    it('should throw error with invalid credentials', async () => {
      vi.mocked(prisma.user.findUnique).mockResolvedValue(null);

      await expect(
        authService.login({
          email: 'test@example.com',
          password: 'WrongPassword',
        })
      ).rejects.toThrow('Invalid email or password');
    });

    it('should throw error with invalid password', async () => {
      const mockUser = {
        id: '123',
        email: 'test@example.com',
        name: 'Test User',
        password: 'hashed_password',
        image: null,
        emailVerified: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      vi.mocked(prisma.user.findUnique).mockResolvedValue(mockUser);
      vi.mocked(passwordUtils.verifyPassword).mockResolvedValue(false);

      await expect(
        authService.login({
          email: 'test@example.com',
          password: 'WrongPassword',
        })
      ).rejects.toThrow('Invalid email or password');
    });
  });

  describe('getUserById', () => {
    it('should return user by id', async () => {
      const mockUser = {
        id: '123',
        email: 'test@example.com',
        name: 'Test User',
        image: null,
        emailVerified: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      vi.mocked(prisma.user.findUnique).mockResolvedValue(mockUser as any);

      const result = await authService.getUserById('123');

      expect(result).toEqual(mockUser);
      expect(result.email).toBe('test@example.com');
    });

    it('should throw error if user not found', async () => {
      vi.mocked(prisma.user.findUnique).mockResolvedValue(null);

      await expect(authService.getUserById('999')).rejects.toThrow('User not found');
    });
  });
});
