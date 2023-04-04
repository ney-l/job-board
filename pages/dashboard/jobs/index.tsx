import { PlusSquareIcon } from '@chakra-ui/icons';
import { Heading, HStack } from '@chakra-ui/react';
import { ReactElement } from 'react';

import { Link } from '@/components/link';
import { Loading } from '@/components/loading';
import { Seo } from '@/components/seo';
import { useUser } from '@/features/auth';
import { JobsList, useJobs } from '@/features/jobs';
import { DashboardLayout } from '@/layouts/dashboard-layout';

const DashboardJobsPage = () => {
  const user = useUser();
  const jobs = useJobs({
    params: { orgId: user.data?.orgId ?? '' },
  });

  if (jobs.isLoading) return <Loading />;

  if (!user.data) return null;

  return (
    <>
      <Seo title="Jobs" />
      <HStack
        mb="8"
        align="center"
        justify="space-between"
      >
        <Heading>Jobs</Heading>
        <Link
          icon={<PlusSquareIcon />}
          variant="solid"
          href="/dashboard/jobs/create"
        >
          Create Job
        </Link>
      </HStack>
      <JobsList
        jobs={jobs.data || []}
        isLoading={jobs.isLoading}
        orgId={user.data.orgId}
        type="dashboard"
      />
    </>
  );
};

DashboardJobsPage.getLayout = (page: ReactElement) => (
  <DashboardLayout>{page}</DashboardLayout>
);

export default DashboardJobsPage;
