import { describe, it, expect } from 'vitest';
import { generateAccessToken, generateRefreshToken, verifyToken, generateTokens } from '../jwt';

describe('JWT Utils', () => {
  const mockPayload = {
    userId: '123',
    email: 'test@example.com',
  };

  describe('generateAccessToken', () => {
    it('should generate access token', () => {
      const token = generateAccessToken(mockPayload);

      expect(token).toBeDefined();
      expect(typeof token).toBe('string');
      expect(token.split('.').length).toBe(3); // JWT has 3 parts
    });
  });

  describe('generateRefreshToken', () => {
    it('should generate refresh token', () => {
      const token = generateRefreshToken(mockPayload);

      expect(token).toBeDefined();
      expect(typeof token).toBe('string');
      expect(token.split('.').length).toBe(3);
    });
  });

  describe('verifyToken', () => {
    it('should verify valid token', () => {
      const token = generateAccessToken(mockPayload);
      const payload = verifyToken(token);

      expect(payload.userId).toBe(mockPayload.userId);
      expect(payload.email).toBe(mockPayload.email);
    });

    it('should throw error for invalid token', () => {
      const invalidToken = 'invalid.token.here';

      expect(() => verifyToken(invalidToken)).toThrow();
    });
  });

  describe('generateTokens', () => {
    it('should generate both access and refresh tokens', () => {
      const tokens = generateTokens(mockPayload);

      expect(tokens).toHaveProperty('accessToken');
      expect(tokens).toHaveProperty('refreshToken');
      expect(typeof tokens.accessToken).toBe('string');
      expect(typeof tokens.refreshToken).toBe('string');
    });
  });
});
