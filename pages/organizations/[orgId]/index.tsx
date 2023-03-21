import { Heading, Stack } from '@chakra-ui/react';
import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next';
import { ReactElement } from 'react';

import { NotFound } from '@/components/not-found';
import { Seo } from '@/components/seo';
import { JobsList } from '@/features/jobs';
import { OrgInfo } from '@/features/organizations';
import { PublicLayout } from '@/layouts';
import { getJobsByOrgId, getOrg } from '@/mock';
import { handleError } from '@/utils';

type PublicOrganizationPageProps =
  InferGetServerSidePropsType<typeof getServerSideProps>;

const PublicOrganizationPage = ({
  org,
  jobs,
}: PublicOrganizationPageProps) => {
  if (!org) return <NotFound />;

  return (
    <>
      <Seo title={org.name} />

      <Stack
        spacing="4"
        w="full"
        maxW="container.lg"
        mx="auto"
        mt="12"
        p="4"
      >
        <OrgInfo org={org} />

        <Heading size="md" my="6">
          Open Jobs
        </Heading>

        <JobsList
          jobs={jobs ?? []}
          orgId={org.id}
          type="public"
        />
      </Stack>
    </>
  );
};

PublicOrganizationPage.getLayout = (
  page: ReactElement
) => <PublicLayout>{page}</PublicLayout>;

export const getServerSideProps = async ({
  params,
}: GetServerSidePropsContext) => {
  const orgId = params?.orgId as string;

  const [org, jobs] = await Promise.all([
    getOrg(orgId).catch(handleError),
    getJobsByOrgId(orgId).catch(handleError),
  ]);

  return {
    props: {
      org,
      jobs,
    },
  };
};

export default PublicOrganizationPage;
