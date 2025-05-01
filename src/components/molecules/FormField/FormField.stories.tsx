import type { Meta, StoryObj } from '@storybook/react';
import { FormField } from './FormField';

const meta: Meta<typeof FormField> = {
  title: 'Molecules/FormField',
  component: FormField,
  argTypes: {
    placeholder: { control: { type: 'text' } },
    disabled: { control: { type: 'boolean' } },
    radiusSize: {
      control: { type: 'select' },
      options: ['none', 'xs'],
    },
    icon: {
      control: { type: 'select' },
      options: ['mail', 'password'],
    },
  },
  args: {
    placeholder: 'Email',
    disabled: false,
    radiusSize: 'none',
    icon: 'mail',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
