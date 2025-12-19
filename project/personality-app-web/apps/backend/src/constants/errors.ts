export const ERROR_MESSAGES = {
  // Authentication errors
  AUTH_INVALID_CREDENTIALS: 'Invalid email or password',
  AUTH_EMAIL_ALREADY_EXISTS: 'An account with this email already exists',
  AUTH_USER_NOT_FOUND: 'User not found',
  AUTH_INVALID_TOKEN: 'Invalid or expired token',
  AUTH_UNAUTHORIZED: 'You must be logged in to access this resource',
  AUTH_SESSION_EXPIRED: 'Your session has expired. Please log in again',
  AUTH_INVALID_EMAIL: 'Please provide a valid email address',
  AUTH_WEAK_PASSWORD: 'Password must be at least 8 characters long and contain uppercase, lowercase, number, and special character',
  AUTH_PASSWORD_MISMATCH: 'Passwords do not match',
  AUTH_EMAIL_NOT_VERIFIED: 'Please verify your email address',
  AUTH_ACCOUNT_DISABLED: 'This account has been disabled',
  AUTH_TOO_MANY_ATTEMPTS: 'Too many failed attempts. Please try again later',

  // OAuth errors
  OAUTH_CALLBACK_ERROR: 'Error during OAuth authentication',
  OAUTH_ACCOUNT_NOT_LINKED: 'This account is not linked to your profile',
  OAUTH_PROVIDER_ERROR: 'Error connecting to authentication provider',

  // Validation errors
  VALIDATION_REQUIRED_FIELD: 'This field is required',
  VALIDATION_INVALID_FORMAT: 'Invalid format provided',
  VALIDATION_MIN_LENGTH: 'Input is too short',
  VALIDATION_MAX_LENGTH: 'Input is too long',

  // Database errors
  DB_CONNECTION_ERROR: 'Database connection error',
  DB_QUERY_ERROR: 'Database query failed',
  DB_UNIQUE_CONSTRAINT: 'A record with this value already exists',

  // Server errors
  SERVER_ERROR: 'An unexpected error occurred. Please try again',
  SERVER_UNAVAILABLE: 'Service temporarily unavailable',
  SERVER_TIMEOUT: 'Request timeout. Please try again',

  // Rate limiting
  RATE_LIMIT_EXCEEDED: 'Too many requests. Please try again later',
} as const;

export const ERROR_CODES = {
  // Authentication codes
  AUTH_INVALID_CREDENTIALS: 'AUTH_001',
  AUTH_EMAIL_ALREADY_EXISTS: 'AUTH_002',
  AUTH_USER_NOT_FOUND: 'AUTH_003',
  AUTH_INVALID_TOKEN: 'AUTH_004',
  AUTH_UNAUTHORIZED: 'AUTH_005',
  AUTH_SESSION_EXPIRED: 'AUTH_006',
  AUTH_INVALID_EMAIL: 'AUTH_007',
  AUTH_WEAK_PASSWORD: 'AUTH_008',
  AUTH_PASSWORD_MISMATCH: 'AUTH_009',
  AUTH_EMAIL_NOT_VERIFIED: 'AUTH_010',
  AUTH_ACCOUNT_DISABLED: 'AUTH_011',
  AUTH_TOO_MANY_ATTEMPTS: 'AUTH_012',

  // OAuth codes
  OAUTH_CALLBACK_ERROR: 'OAUTH_001',
  OAUTH_ACCOUNT_NOT_LINKED: 'OAUTH_002',
  OAUTH_PROVIDER_ERROR: 'OAUTH_003',

  // Validation codes
  VALIDATION_REQUIRED_FIELD: 'VAL_001',
  VALIDATION_INVALID_FORMAT: 'VAL_002',
  VALIDATION_MIN_LENGTH: 'VAL_003',
  VALIDATION_MAX_LENGTH: 'VAL_004',

  // Database codes
  DB_CONNECTION_ERROR: 'DB_001',
  DB_QUERY_ERROR: 'DB_002',
  DB_UNIQUE_CONSTRAINT: 'DB_003',

  // Server codes
  SERVER_ERROR: 'SRV_001',
  SERVER_UNAVAILABLE: 'SRV_002',
  SERVER_TIMEOUT: 'SRV_003',

  // Rate limiting codes
  RATE_LIMIT_EXCEEDED: 'RATE_001',
} as const;

export class AppError extends Error {
  constructor(
    public code: string,
    message: string,
    public statusCode: number = 500,
    public isOperational: boolean = true
  ) {
    super(message);
    this.name = 'AppError';
    Error.captureStackTrace(this, this.constructor);
  }
}

export class AuthError extends AppError {
  constructor(code: keyof typeof ERROR_CODES, message: keyof typeof ERROR_MESSAGES, statusCode: number = 401) {
    super(ERROR_CODES[code], ERROR_MESSAGES[message], statusCode);
    this.name = 'AuthError';
  }
}

export class ValidationError extends AppError {
  constructor(code: keyof typeof ERROR_CODES, message: string, statusCode: number = 400) {
    super(ERROR_CODES[code], message, statusCode);
    this.name = 'ValidationError';
  }
}

export class DatabaseError extends AppError {
  constructor(code: keyof typeof ERROR_CODES, message: string, statusCode: number = 500) {
    super(ERROR_CODES[code], message, statusCode);
    this.name = 'DatabaseError';
  }
}
