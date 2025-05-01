import type { Meta, StoryObj } from '@storybook/react';
import { LogInForm } from './LogInForm';

const meta: Meta<typeof LogInForm> = {
  title: 'Components/Organisms/LogInForm',
  component: LogInForm,
  argTypes: {
    emailPlaceholder: { control: 'text' },
    passwordPlaceholder: { control: 'text' },
    buttonLabel: { control: 'text' }
  },
  args: {
    emailPlaceholder: 'Email',
    passwordPlaceholder: 'Password',
    buttonLabel: 'Login'
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof LogInForm>;

export const Default: Story = {};
