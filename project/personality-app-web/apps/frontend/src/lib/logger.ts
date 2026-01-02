import winston from 'winston';

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

const level = () => {
  const env = process.env.NODE_ENV || 'development';
  const isDevelopment = env === 'development';
  return isDevelopment ? 'debug' : 'warn';
};

const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'white',
};

winston.addColors(colors);

const format = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
  winston.format.colorize({ all: true }),
  winston.format.printf(
    (info) => `${info.timestamp} ${info.level}: ${info.message}`,
  ),
);

const transports = [
  new winston.transports.Console(),
  new winston.transports.File({
    filename: 'logs/error.log',
    level: 'error',
  }),
  new winston.transports.File({ filename: 'logs/all.log' }),
];

const logger = winston.createLogger({
  level: level(),
  levels,
  format,
  transports,
});

export default logger;

export const logAuthAttempt = (email: string, success: boolean, method: string) => {
  logger.info(`Auth attempt - Email: ${email}, Success: ${success}, Method: ${method}`);
};

export const logError = (error: Error, context?: Record<string, unknown>) => {
  logger.error(`Error: ${error.message}`, {
    stack: error.stack,
    ...context,
  });
};

export const logInfo = (message: string, context?: Record<string, unknown>) => {
  logger.info(message, context);
};

export const logWarning = (message: string, context?: Record<string, unknown>) => {
  logger.warn(message, context);
};

export const logDebug = (message: string, context?: Record<string, unknown>) => {
  logger.debug(message, context);
};
