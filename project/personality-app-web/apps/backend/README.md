# Personality App - Backend API

Production-ready authentication backend built with Express.js, TypeScript, PostgreSQL, and Passport.js.

## Features

- **JWT Authentication** - Secure token-based authentication
- **Social Login** - Google and Facebook OAuth integration
- **Password Security** - Bcrypt hashing with salt rounds
- **Input Validation** - Zod schema validation on all endpoints
- **Error Handling** - Centralized error handling with custom error classes
- **Logging** - Winston logger with file and console transports
- **Rate Limiting** - Protection against brute force attacks
- **CORS** - Configured for frontend integration
- **Type Safety** - Strict TypeScript configuration
- **Database** - Prisma ORM with PostgreSQL
- **Testing** - Unit tests with Vitest

## Tech Stack

- **Runtime**: Node.js 18+
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: Passport.js (JWT, Google, Facebook)
- **Validation**: Zod
- **Logging**: Winston
- **Testing**: Vitest, Supertest

## Project Structure

```
src/
├── config/           # Configuration files (database, logger, passport)
├── constants/        # Error messages and codes
├── controllers/      # Request handlers
├── middleware/       # Express middleware (auth, error, validation)
├── routes/          # API route definitions
├── services/        # Business logic layer
├── utils/           # Utility functions (JWT, password, validation)
├── types/           # TypeScript type definitions
├── app.ts           # Express app configuration
└── index.ts         # Server entry point
```

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- PostgreSQL 15+
- pnpm >= 8.0.0

### Installation

1. Install dependencies:
```bash
pnpm install
```

2. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your configuration
```

3. Generate Prisma client:
```bash
pnpm prisma:generate
```

4. Run database migrations:
```bash
pnpm prisma:migrate
```

5. Start development server:
```bash
pnpm dev
```

The API will be available at `http://localhost:3001`

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NODE_ENV` | Environment (development/production) | Yes |
| `PORT` | Server port | Yes |
| `DATABASE_URL` | PostgreSQL connection string | Yes |
| `JWT_SECRET` | Secret key for JWT signing | Yes |
| `JWT_EXPIRES_IN` | Access token expiration | No (default: 7d) |
| `REFRESH_TOKEN_EXPIRES_IN` | Refresh token expiration | No (default: 30d) |
| `FRONTEND_URL` | Frontend application URL | Yes |
| `API_URL` | Backend API URL | Yes |
| `GOOGLE_CLIENT_ID` | Google OAuth client ID | No |
| `GOOGLE_CLIENT_SECRET` | Google OAuth client secret | No |
| `FACEBOOK_CLIENT_ID` | Facebook OAuth client ID | No |
| `FACEBOOK_CLIENT_SECRET` | Facebook OAuth client secret | No |
| `LOG_LEVEL` | Logging level (debug/info/warn/error) | No (default: info) |

## API Endpoints

### Health Check
```
GET /api/health
```

### Authentication

#### Register
```
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "Password123!",
  "confirmPassword": "Password123!"
}

Response:
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "user": {
      "id": "...",
      "email": "john@example.com",
      "name": "John Doe"
    },
    "accessToken": "...",
    "refreshToken": "..."
  }
}
```

#### Login
```
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "Password123!"
}

Response:
{
  "success": true,
  "message": "Login successful",
  "data": {
    "user": { ... },
    "accessToken": "...",
    "refreshToken": "..."
  }
}
```

#### Get Profile (Protected)
```
GET /api/auth/profile
Authorization: Bearer <token>

Response:
{
  "success": true,
  "data": {
    "id": "...",
    "email": "john@example.com",
    "name": "John Doe",
    "image": null,
    "createdAt": "...",
    "updatedAt": "..."
  }
}
```

#### Update Profile (Protected)
```
PUT /api/auth/profile
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "John Updated",
  "image": "https://example.com/avatar.jpg"
}
```

#### Change Password (Protected)
```
POST /api/auth/change-password
Authorization: Bearer <token>
Content-Type: application/json

{
  "currentPassword": "OldPassword123!",
  "newPassword": "NewPassword123!",
  "confirmNewPassword": "NewPassword123!"
}
```

### OAuth Routes

#### Google OAuth
```
GET /api/auth/google
# Redirects to Google login

GET /api/auth/google/callback
# Google callback (handled automatically)
```

#### Facebook OAuth
```
GET /api/auth/facebook
# Redirects to Facebook login

GET /api/auth/facebook/callback
# Facebook callback (handled automatically)
```

## Testing

### Run Unit Tests
```bash
pnpm test
```

### Run Tests in Watch Mode
```bash
pnpm test:watch
```

### Generate Coverage Report
```bash
pnpm test --coverage
```

## Error Codes

All errors follow this format:
```json
{
  "success": false,
  "code": "ERROR_CODE",
  "message": "Human readable error message"
}
```

Common error codes:
- `AUTH_001` - Invalid credentials
- `AUTH_002` - Email already exists
- `AUTH_003` - User not found
- `AUTH_004` - Invalid token
- `AUTH_005` - Unauthorized
- `VAL_001` - Validation error
- `DB_001` - Database error
- `SRV_001` - Server error

## Security Features

- **Password Hashing**: Bcrypt with 12 salt rounds
- **JWT Tokens**: Signed with secret key
- **Rate Limiting**: 100 requests per 15 minutes per IP
- **CORS**: Configured for specific origin
- **Helmet**: Security headers
- **Input Validation**: Zod schemas on all inputs
- **SQL Injection Protection**: Prisma ORM
- **XSS Protection**: Express security middleware

## Logging

Logs are written to:
- Console (all levels in development)
- `logs/error.log` (errors only)
- `logs/all.log` (all logs)

Log levels: `error`, `warn`, `info`, `http`, `debug`

## Database Schema

See `prisma/schema.prisma` for complete schema.

Main models:
- **User**: User accounts
- **Account**: OAuth provider accounts
- **Session**: User sessions
- **TestResult**: Personality test results
- **VerificationToken**: Email verification tokens

## Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm test` - Run tests
- `pnpm lint` - Lint code
- `pnpm type-check` - Type check
- `pnpm prisma:generate` - Generate Prisma client
- `pnpm prisma:migrate` - Run migrations
- `pnpm prisma:studio` - Open Prisma Studio

## License

MIT
