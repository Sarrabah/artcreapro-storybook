import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'Components/Atoms/Text',
  component: Text,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'lg'],
    },
    children: {
      control: { type: 'text' },
    },
  },
  args: {
    size: 'sm',
    children: 'This is you text',
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {};

