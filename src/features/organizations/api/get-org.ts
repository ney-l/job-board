import { useQuery } from '@tanstack/react-query';

import { apiClient } from '@/lib/api-client';

import { Organization } from '../types';

type GetOrgOptions = {
  orgId: string;
};

export const getOrg = ({
  orgId,
}: GetOrgOptions): Promise<Organization> => {
  return apiClient.get(`/organizations/${orgId}`);
};

export const useOrg = ({ orgId }: GetOrgOptions) => {
  const { data, isLoading } = useQuery({
    queryKey: ['organizations', orgId],
    queryFn: () => getOrg({ orgId }),
  });

  return { data, isLoading };
};
