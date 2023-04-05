import { Stack, Button } from '@chakra-ui/react';
import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next';
import { ReactElement } from 'react';

import { NotFound } from '@/components/not-found';
import { Seo } from '@/components/seo';
import { getJob, PublicJobInfo } from '@/features/jobs';
import { getOrg } from '@/features/organizations';
import { PublicLayout } from '@/layouts';
import { handleError } from '@/utils';

type PublicJobPageProps = InferGetServerSidePropsType<
  typeof getServerSideProps
>;

export const PublicJobPage = ({
  job,
  org,
}: PublicJobPageProps) => {
  const isInvalid = !job || !org || org.id !== job.orgId;

  if (isInvalid) return <NotFound />;

  return (
    <>
      <Seo title={`${job.position} | ${job.location}`} />
      <Stack w="full">
        <PublicJobInfo job={job} />
        <Button
          bg="primary"
          color="primaryAccent"
          _hover={{ opacity: '0.9' }}
          as="a"
          href={`mailto:${org.email}?subject=Application for ${job.position} position`}
          target="_blank"
        >
          Apply
        </Button>
      </Stack>
    </>
  );
};

PublicJobPage.getLayout = (page: ReactElement) => (
  <PublicLayout>{page}</PublicLayout>
);

export const getServerSideProps = async ({
  params,
}: GetServerSidePropsContext) => {
  const orgId = params?.orgId as string;
  const jobId = params?.jobId as string;
  const [org, job] = await Promise.all([
    getOrg({ orgId }).catch(handleError),
    getJob({ jobId }).catch(handleError),
  ]);

  return {
    props: {
      job: job ?? null,
      org: org ?? null,
    },
  };
};

export default PublicJobPage;
