import { rest } from 'msw';

import CONSTANTS from '@/constants';

export const handlers = [
  rest.get(
    `${CONSTANTS.API_URL}/healthcheck`,
    (req, res, ctx) =>
      res(ctx.status(200), ctx.json({ healthy: true }))
  ),
];
