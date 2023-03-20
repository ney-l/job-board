import { Heading, Stack } from '@chakra-ui/react';

import { Content } from '@/components/content';
import { InfoCard } from '@/components/info-card';

import type { Organization } from '../types';

export type OrgInfoProps = {
  org: Organization;
};
export const OrgInfo = ({ org }: OrgInfoProps) => (
  <>
    <Stack
      w="full"
      alignItems="center"
      justifyContent="space-between"
      direction={{ base: 'column', md: 'row' }}
    >
      <Heading>{org?.name}</Heading>
      <Stack
        w={{ base: 'full', md: 'auto' }}
        direction={{ base: 'column', md: 'row' }}
      >
        <InfoCard label="Email" value={org.email} />
        <InfoCard
          label="Phone Number"
          value={org.phone}
        />
      </Stack>
    </Stack>

    <Content>{org.info}</Content>
  </>
);
