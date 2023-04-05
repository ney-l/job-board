import { useEffect, useState } from 'react';

import { Job } from '@/features/jobs';

import { testData as data } from '../test-data';

export const getJobs = () => data.jobs;

export const getOrg = async (id: string) => {
  return Promise.resolve(
    data.organizations.find((org) => org.id === id)
  );
};

export const getJobsByOrgId = async (orgId: string) => {
  return Promise.resolve(
    data.jobs.filter((job) => job.orgId === orgId)
  );
};

export const getJobById = async (
  id: string
): Promise<Job | null> => {
  return Promise.resolve(
    data.jobs.find((job) => job.id === id) ?? null
  );
};

type User = {
  id: string;
  createdAt: number;
  email: string;
  password: string;
  orgId: string;
};

export const useUser = () => {
  const [state, setState] = useState<{
    isLoading: boolean;
    data: User | null;
  }>({
    isLoading: true,
    data: null,
  });

  useEffect(() => {
    Promise.resolve().then(() =>
      setState({
        isLoading: false,
        data: data.users[0],
      })
    );
  });

  return state;
};

export const useJobs = (orgId: string) => {
  const [state, setState] = useState<{
    isLoading: boolean;
    data: Job[];
  }>({
    isLoading: true,
    data: [],
  });

  useEffect(() => {
    getJobsByOrgId(orgId).then((jobs) =>
      setState({
        isLoading: false,
        data: jobs,
      })
    );
  }, [orgId]);

  return state;
};

export const useJob = (jobId: string) => {
  const [state, setState] = useState<{
    isLoading: boolean;
    data: Job | null;
  }>({
    isLoading: true,
    data: null,
  });

  useEffect(() => {
    getJobById(jobId).then((job) =>
      setState({
        isLoading: false,
        data: job,
      })
    );
  }, [jobId]);

  return state;
};

export default data;
