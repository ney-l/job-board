import { Box } from '@chakra-ui/react';

import {
  DataTable,
  DataTableProps,
} from '@/components/data-table';
import { Link } from '@/components/link';

import { Job } from '../../types';

type JobListType = 'dashboard' | 'public';

export type JobsListProps = {
  type: JobListType;
  jobs: Job[];
  isLoading?: boolean;
  orgId: string;
};

const getTableColumns = (
  orgId: string,
  type: JobListType
) => {
  const tableColumns: DataTableProps<Job>['columns'] = [
    { title: 'Position', field: 'position' },
    { title: 'Department', field: 'department' },
    { title: 'Location', field: 'location' },
    {
      title: '',
      field: 'id',
      render: ({ entry: { id } }) => (
        <Link
          href={
            type === 'public'
              ? `/organizations/${orgId}/jobs/${id}`
              : `/dashboard/jobs/${id}`
          }
        >
          View
        </Link>
      ),
    },
  ];

  return tableColumns;
};

export const JobsList = ({
  jobs,
  isLoading,
  orgId,
  type,
}: JobsListProps) => {
  const tableColumns = getTableColumns(orgId, type);

  return (
    <Box data-testid="jobs-list">
      <DataTable
        isLoading={isLoading || false}
        data={jobs}
        columns={tableColumns}
      />
    </Box>
  );
};
