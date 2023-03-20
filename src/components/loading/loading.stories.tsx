import { Meta, Story } from '@storybook/react';

import { Loading } from './loading';

export default {
  title: 'Components/Loading',
  component: Loading,
} as Meta;

const Template: Story = (props) => <Loading {...props} />;

export const Default = Template.bind({});
