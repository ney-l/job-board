import { rest } from 'msw';

import CONSTANTS from '@/constants';

import { db } from '../db';
import { requireAuth } from '../utils';

const getJobsHandler = rest.get(
  `${CONSTANTS.API_URL}/jobs`,
  async (req, res, ctx) => {
    const orgId = req.url.searchParams.get(
      `orgId`
    ) as string;

    const jobs = db.job.findMany({
      where: {
        orgId: {
          equals: orgId,
        },
      },
    });

    return res(
      ctx.delay(300),
      ctx.status(200),
      ctx.json(jobs)
    );
  }
);

const getJobHandler = rest.get(
  `${CONSTANTS.API_URL}/jobs/:jobId`,
  async (req, res, ctx) => {
    const jobId = req.params.jobId as string;
    const job = db.job.findFirst({
      where: {
        id: {
          equals: jobId,
        },
      },
    });

    if (!job) {
      return res(
        ctx.delay(300),
        ctx.status(404),
        ctx.json({ message: 'Not found!' })
      );
    }

    return res(
      ctx.delay(300),
      ctx.status(200),
      ctx.json(job)
    );
  }
);

const createJobHandler = rest.post(
  `${CONSTANTS.API_URL}/jobs`,
  async (req, res, ctx) => {
    const user = requireAuth({ req });
    const jobData = await req.json();
    const job = db.job.create({
      ...jobData,
      orgId: user?.orgId,
    });

    return res(
      ctx.delay(300),
      ctx.status(200),
      ctx.json(job)
    );
  }
);

export const jobHandlers = [
  getJobsHandler,
  getJobHandler,
  createJobHandler,
];
