import { RestRequest } from 'msw';

import { CONSTANTS } from '@/constants';
import { Entity } from '@/types';

import data from './data';
import { db } from './db';

type AuthUser = Entity & {
  email: string;
  orgId: string;
};

const AUTH_TOKEN = 'eyUibGdiOiJIUzI1NiIsInR5cCI6IkpXVNH6';

export const AUTH_COOKIE = 'auth-token';

const sanitizeUser = (user: any): AuthUser => {
  const sanitizeUser = { ...user };
  delete sanitizeUser.password;
  return sanitizeUser;
};

export const getUser = () => sanitizeUser(data.users[0]);

// returns the user object and auth token if the provided credentials are valid
export const authenticate = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const user = db.user.findFirst({
    where: {
      email: {
        equals: email,
      },
    },
  });

  if (user?.password === password) {
    const sanitizedUser = sanitizeUser(user);
    const encodedToken = AUTH_TOKEN;
    return { user: sanitizedUser, jwt: encodedToken };
  }

  throw new Error('Invalid username or password');
};

// extract the token and return the user if exists
export const requireAuth = ({
  req,
  shouldThrow = true,
}: {
  req: RestRequest;
  shouldThrow?: boolean;
}) => {
  if (CONSTANTS.IS_TEST) {
    return getUser();
  } else {
    const encodedToken = req.cookies[AUTH_COOKIE];

    if (encodedToken !== AUTH_TOKEN) {
      if (shouldThrow) {
        throw new Error(
          'No authorization token provided!'
        );
      }
      return null;
    }

    return getUser();
  }
};
