import type { NextAuthConfig } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { prisma } from '../prisma';
import { verifyPassword } from './password';
import { loginSchema } from '../validations/auth';
import { AuthError, ERROR_CODES, ERROR_MESSAGES } from '../constants/errors';
import { logAuthAttempt, logError } from '../logger';

export const authConfig: NextAuthConfig = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          // Validate input
          const validatedFields = loginSchema.safeParse(credentials);

          if (!validatedFields.success) {
            logAuthAttempt(credentials?.email as string, false, 'credentials');
            throw new AuthError(
              'AUTH_INVALID_CREDENTIALS',
              'AUTH_INVALID_CREDENTIALS'
            );
          }

          const { email, password } = validatedFields.data;

          // Find user
          const user = await prisma.user.findUnique({
            where: { email },
          });

          if (!user || !user.password) {
            logAuthAttempt(email, false, 'credentials');
            throw new AuthError(
              'AUTH_INVALID_CREDENTIALS',
              'AUTH_INVALID_CREDENTIALS'
            );
          }

          // Verify password
          const isPasswordValid = await verifyPassword(password, user.password);

          if (!isPasswordValid) {
            logAuthAttempt(email, false, 'credentials');
            throw new AuthError(
              'AUTH_INVALID_CREDENTIALS',
              'AUTH_INVALID_CREDENTIALS'
            );
          }

          logAuthAttempt(email, true, 'credentials');

          return {
            id: user.id,
            email: user.email,
            name: user.name,
            image: user.image,
          };
        } catch (error) {
          logError(error as Error, { context: 'authorize' });
          throw error;
        }
      },
    }),
  ],
  pages: {
    signIn: '/auth/login',
    signOut: '/auth/logout',
    error: '/auth/error',
    verifyRequest: '/auth/verify-request',
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      try {
        logAuthAttempt(
          user.email!,
          true,
          account?.provider || 'unknown'
        );
        return true;
      } catch (error) {
        logError(error as Error, { context: 'signIn callback' });
        return false;
      }
    },
    async jwt({ token, user, account }) {
      if (user) {
        token.id = user.id;
      }
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === 'development',
};
