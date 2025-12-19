import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt, StrategyOptions } from 'passport-jwt';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as FacebookStrategy } from 'passport-facebook';
import prisma from './database';
import logger from './logger';
import { AuthError } from '../constants/errors';

const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-in-production';

// JWT Strategy
const jwtOptions: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: JWT_SECRET,
};

passport.use(
  new JwtStrategy(jwtOptions, async (payload, done) => {
    try {
      const user = await prisma.user.findUnique({
        where: { id: payload.userId },
        select: {
          id: true,
          email: true,
          name: true,
          image: true,
          createdAt: true,
          updatedAt: true,
        },
      });

      if (!user) {
        return done(new AuthError('AUTH_USER_NOT_FOUND', 'AUTH_USER_NOT_FOUND'), false);
      }

      return done(null, user);
    } catch (error) {
      logger.error('JWT Strategy error:', error);
      return done(error, false);
    }
  })
);

// Google OAuth Strategy
if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: `${process.env.API_URL}/api/auth/google/callback`,
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          const email = profile.emails?.[0]?.value;
          if (!email) {
            return done(new AuthError('AUTH_INVALID_EMAIL', 'AUTH_INVALID_EMAIL'), false);
          }

          let user = await prisma.user.findUnique({
            where: { email },
          });

          if (!user) {
            user = await prisma.user.create({
              data: {
                email,
                name: profile.displayName,
                image: profile.photos?.[0]?.value,
                emailVerified: new Date(),
              },
            });

            await prisma.account.create({
              data: {
                userId: user.id,
                type: 'oauth',
                provider: 'google',
                providerAccountId: profile.id,
                access_token: accessToken,
                refresh_token: refreshToken,
              },
            });
          }

          logger.info(`Google OAuth successful for user: ${email}`);
          return done(null, user);
        } catch (error) {
          logger.error('Google OAuth error:', error);
          return done(error, false);
        }
      }
    )
  );
}

// Facebook OAuth Strategy
if (process.env.FACEBOOK_CLIENT_ID && process.env.FACEBOOK_CLIENT_SECRET) {
  passport.use(
    new FacebookStrategy(
      {
        clientID: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        callbackURL: `${process.env.API_URL}/api/auth/facebook/callback`,
        profileFields: ['id', 'emails', 'name', 'photos'],
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          const email = profile.emails?.[0]?.value;
          if (!email) {
            return done(new AuthError('AUTH_INVALID_EMAIL', 'AUTH_INVALID_EMAIL'), false);
          }

          let user = await prisma.user.findUnique({
            where: { email },
          });

          if (!user) {
            user = await prisma.user.create({
              data: {
                email,
                name: `${profile.name?.givenName} ${profile.name?.familyName}`,
                image: profile.photos?.[0]?.value,
                emailVerified: new Date(),
              },
            });

            await prisma.account.create({
              data: {
                userId: user.id,
                type: 'oauth',
                provider: 'facebook',
                providerAccountId: profile.id,
                access_token: accessToken,
                refresh_token: refreshToken,
              },
            });
          }

          logger.info(`Facebook OAuth successful for user: ${email}`);
          return done(null, user);
        } catch (error) {
          logger.error('Facebook OAuth error:', error);
          return done(error, false);
        }
      }
    )
  );
}

export default passport;
