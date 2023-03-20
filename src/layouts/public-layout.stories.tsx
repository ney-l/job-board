import { Meta, Story } from '@storybook/react';

import {
  PublicLayout,
  PublicLayoutProps,
} from './public-layout';

export default {
  title: 'Layouts/Public',
  component: PublicLayout,
} as Meta;

const Template: Story<PublicLayoutProps> = (args) => (
  <PublicLayout {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const WithContent = Template.bind({});
WithContent.args = {
  children: (
    <div>
      <h1>Page Title</h1>
      <p>Page content goes here</p>
    </div>
  ),
};
