import { PlusSquareIcon } from '@chakra-ui/icons';
import { Meta, Story } from '@storybook/react';

import { Link, LinkProps } from './link';

export default {
  title: 'Components/Link',
  component: Link,
} as Meta;

const Template: Story<LinkProps> = (args) => (
  <Link {...args} />
);

export const PlainLink = Template.bind({});
PlainLink.args = {
  href: '/',
  children: 'Plain Link',
};

export const LinkAsButton = Template.bind({});
LinkAsButton.args = {
  href: '/',
  children: 'Link as Button',
  variant: 'solid',
};

export const LinkAsOutlinedButton = Template.bind({});
LinkAsOutlinedButton.args = {
  href: '/',
  children: 'Link as Outlin Button',
  variant: 'outline',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  href: '/',
  children: 'Link with Icon',
  icon: <PlusSquareIcon />,
};

export const Shallow = Template.bind({});
Shallow.args = {
  href: '/',
  children: 'Shallow Link',
  shallow: true,
};
