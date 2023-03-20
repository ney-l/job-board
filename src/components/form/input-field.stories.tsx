import { Meta, Story } from '@storybook/react';

import {
  InputField,
  InputFieldProps,
} from './input-field';

export default {
  title: 'Components/InputField',
  component: InputField,
} as Meta;

const Template: Story<InputFieldProps> = (args) => (
  <InputField {...args} />
);

export const Text = Template.bind({});
Text.args = {
  type: 'text',
  label: 'Text Input',
};

export const Email = Template.bind({});
Email.args = {
  type: 'email',
  label: 'Email Input',
};

export const Password = Template.bind({});
Password.args = {
  type: 'password',
  label: 'Password Input',
};

export const Textarea = Template.bind({});
Textarea.args = {
  type: 'textarea',
  label: 'Textarea',
};

export const Error = Template.bind({});
Error.args = {
  type: 'text',
  label: 'Text Input',
  error: {
    type: 'required',
    message: 'This field is required.',
  },
};
