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
  onLogout: () => console.log('Logged out!'),
};

export const WithBackground = Template.bind({});
WithBackground.args = {
  onLogout: () => console.log('Logged out!'),
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
