import { z } from 'zod';
import { ERROR_MESSAGES } from '../constants/errors';

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/;

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, ERROR_MESSAGES.VALIDATION_REQUIRED_FIELD)
    .email(ERROR_MESSAGES.AUTH_INVALID_EMAIL),
  password: z
    .string()
    .min(1, ERROR_MESSAGES.VALIDATION_REQUIRED_FIELD)
    .min(8, ERROR_MESSAGES.AUTH_WEAK_PASSWORD),
});

export const registerSchema = z.object({
  email: z
    .string()
    .min(1, ERROR_MESSAGES.VALIDATION_REQUIRED_FIELD)
    .email(ERROR_MESSAGES.AUTH_INVALID_EMAIL),
  password: z
    .string()
    .min(1, ERROR_MESSAGES.VALIDATION_REQUIRED_FIELD)
    .min(8, ERROR_MESSAGES.AUTH_WEAK_PASSWORD)
    .regex(passwordRegex, ERROR_MESSAGES.AUTH_WEAK_PASSWORD),
  confirmPassword: z
    .string()
    .min(1, ERROR_MESSAGES.VALIDATION_REQUIRED_FIELD),
  name: z
    .string()
    .min(1, ERROR_MESSAGES.VALIDATION_REQUIRED_FIELD)
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must not exceed 100 characters'),
}).refine((data) => data.password === data.confirmPassword, {
  message: ERROR_MESSAGES.AUTH_PASSWORD_MISMATCH,
  path: ['confirmPassword'],
});

export const updateProfileSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must not exceed 100 characters')
    .optional(),
  email: z
    .string()
    .email(ERROR_MESSAGES.AUTH_INVALID_EMAIL)
    .optional(),
  image: z
    .string()
    .url('Invalid image URL')
    .optional(),
});

export const changePasswordSchema = z.object({
  currentPassword: z
    .string()
    .min(1, ERROR_MESSAGES.VALIDATION_REQUIRED_FIELD),
  newPassword: z
    .string()
    .min(1, ERROR_MESSAGES.VALIDATION_REQUIRED_FIELD)
    .min(8, ERROR_MESSAGES.AUTH_WEAK_PASSWORD)
    .regex(passwordRegex, ERROR_MESSAGES.AUTH_WEAK_PASSWORD),
  confirmNewPassword: z
    .string()
    .min(1, ERROR_MESSAGES.VALIDATION_REQUIRED_FIELD),
}).refine((data) => data.newPassword === data.confirmNewPassword, {
  message: ERROR_MESSAGES.AUTH_PASSWORD_MISMATCH,
  path: ['confirmNewPassword'],
}).refine((data) => data.currentPassword !== data.newPassword, {
  message: 'New password must be different from current password',
  path: ['newPassword'],
});

export const resetPasswordRequestSchema = z.object({
  email: z
    .string()
    .min(1, ERROR_MESSAGES.VALIDATION_REQUIRED_FIELD)
    .email(ERROR_MESSAGES.AUTH_INVALID_EMAIL),
});

export const resetPasswordSchema = z.object({
  token: z.string().min(1, ERROR_MESSAGES.VALIDATION_REQUIRED_FIELD),
  password: z
    .string()
    .min(1, ERROR_MESSAGES.VALIDATION_REQUIRED_FIELD)
    .min(8, ERROR_MESSAGES.AUTH_WEAK_PASSWORD)
    .regex(passwordRegex, ERROR_MESSAGES.AUTH_WEAK_PASSWORD),
  confirmPassword: z
    .string()
    .min(1, ERROR_MESSAGES.VALIDATION_REQUIRED_FIELD),
}).refine((data) => data.password === data.confirmPassword, {
  message: ERROR_MESSAGES.AUTH_PASSWORD_MISMATCH,
  path: ['confirmPassword'],
});

// Type exports
export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
export type UpdateProfileInput = z.infer<typeof updateProfileSchema>;
export type ChangePasswordInput = z.infer<typeof changePasswordSchema>;
export type ResetPasswordRequestInput = z.infer<typeof resetPasswordRequestSchema>;
export type ResetPasswordInput = z.infer<typeof resetPasswordSchema>;
