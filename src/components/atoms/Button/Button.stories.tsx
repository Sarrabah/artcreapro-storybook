import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md'],
    },
    disable: {
      control: { type: 'boolean' },
    },
    onClick: { action: 'clicked' },
    radiusSize: {
      control: { type: 'select' },
      options: ['xs', 'none'],
    },
  },
  args: {
    label: 'Button Label',
    size: 'md',
    disable: false,
    radiusSize: 'none'
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

