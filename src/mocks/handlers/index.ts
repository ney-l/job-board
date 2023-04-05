import { rest } from 'msw';

import { CONSTANTS } from '@/constants';

import { authHandlers } from './auth';
import { jobHandlers } from './jobs';
import { orgHandlers } from './organizations';

export const handlers = [
  ...authHandlers,
  ...jobHandlers,
  ...orgHandlers,
  rest.get(
    `${CONSTANTS.API_URL}/healthcheck`,
    (req, res, ctx) =>
      res(ctx.status(200), ctx.json({ healthy: true }))
  ),
];
