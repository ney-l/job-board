import { Meta, Story } from '@storybook/react';

import { InfoCard, InfoCardProps } from './info-card';

export default {
  title: 'Components/InfoCard',
  component: InfoCard,
} as Meta;

const Template: Story<InfoCardProps> = (args) => (
  <InfoCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'Full Name',
  value: 'John Doe',
};
