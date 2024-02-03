/* eslint-disable @typescript-eslint/no-explicit-any */
import logger from 'npmlog';
import { ErrorWithContext } from '@/utils/error';

export const logInfo = (prefix: string, msg: string, context?: Record<string, any>) => {
  logger.info(prefix, msg, context);
};

export const logWarn = (prefix: string, msg: string, context?: Record<string, any>) => {
  logger.warn(prefix, msg, context);
};

export const logError = (prefix: string, error: Error, additionalContext?: any) => {
  const msg = error.message;
  let context = {};

  if (error instanceof ErrorWithContext) {
    context = {
      ...context,
      ...error.context,
    };
  }
  if (additionalContext) {
    context = {
      ...context,
      ...additionalContext,
    };
  }

  return logger.error(prefix, msg, context);
};
