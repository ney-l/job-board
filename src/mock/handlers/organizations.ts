import { rest } from 'msw';

import CONSTANTS from '@/constants';

import { db } from '../db';

const getOrgHandler = rest.get(
  `${CONSTANTS.API_URL}/organizations/:orgId`,
  (req, res, ctx) => {
    const orgId = req.params.orgId as string;
    const org = db.organization.findFirst({
      where: {
        id: {
          equals: orgId,
        },
      },
    });

    if (!org) {
      return res(
        ctx.status(404),
        ctx.json({ message: 'Not found!' })
      );
    }

    return res(
      ctx.delay(300),
      ctx.status(200),
      ctx.json(org)
    );
  }
);

export const orgHandlers = [getOrgHandler];
