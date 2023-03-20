import { Stack } from '@chakra-ui/react';
import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next';
import { ReactElement } from 'react';

import { NotFound } from '@/components/not-found';
import { Seo } from '@/components/seo';
import { OrgInfo } from '@/features/organizations';
import { PublicLayout } from '@/layouts';
import { getOrg } from '@/mock';

type PublicOrganizationPageProps =
  InferGetServerSidePropsType<typeof getServerSideProps>;

const PublicOrganizationPage = ({
  org,
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
  const org = (await getOrg(orgId)) ?? null;
  return {
    props: {
      org,
    },
  };
};

export default PublicOrganizationPage;
