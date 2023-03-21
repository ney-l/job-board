import { Meta, Story } from '@storybook/react';

import { getJobs } from '@/mock';

import { DataTable, DataTableProps } from './data-table';

export default {
  title: 'Components/DataTable',
  component: DataTable,
} as Meta;

const data = getJobs();

const columns: DataTableProps<typeof data[0]>['columns'] =
  [
    { title: 'Position', field: 'position' },
    { title: 'Department', field: 'department' },
    { title: 'Location', field: 'location' },
  ];

const Template: Story<DataTableProps<typeof data[0]>> = (
  props
) => <DataTable {...props} />;

export const Default = Template.bind({});
Default.args = {
  columns,
  data,
};

export const Empty = Template.bind({});
Empty.args = {
  columns,
  data: [],
};

export const Loading = Template.bind({});
Loading.args = {
  columns,
  data: [],
  isLoading: true,
};
