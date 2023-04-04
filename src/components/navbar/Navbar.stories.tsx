import { Box } from '@chakra-ui/react';
import { Meta, Story } from '@storybook/react';

import { Navbar, NavbarProps } from './Navbar';

export default {
  title: 'Components/Navbar',
  component: Navbar,
} as Meta;

const Template: Story<NavbarProps> = (args) => (
  <Navbar {...args} />
);

export const Default = Template.bind({});
Default.args = {
  logout: {
    submit: () => console.log('Logged out!'),
    isLoading: false,
  },
};

export const WithLoading = Template.bind({});
WithLoading.args = {
  logout: {
    submit: () => console.log('Logged out!'),
    isLoading: true,
  },
};

export const WithBackground = Template.bind({});
WithBackground.args = {
  logout: {
    submit: () => console.log('Logged out!'),
    isLoading: false,
  },
};
WithBackground.decorators = [
  (Story) => (
    <Box bg="gray.200" p="4">
      <Story />
    </Box>
  ),
];
WithBackground.parameters = {
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: '#1A202C',
      },
    ],
  },
};
