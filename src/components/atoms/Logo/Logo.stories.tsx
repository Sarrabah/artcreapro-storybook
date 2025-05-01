import type { Meta, StoryObj } from '@storybook/react';
import { Logo } from './Logo';

const meta: Meta<typeof Logo> = {
  title: 'Components/Logo',
  component: Logo,
  argTypes: {
    width: { control: { type: 'number' } },
    height: { control: { type: 'number' } },
    linkUrl: { control: { type: 'text' } },
  },
  args: {
    width: 400,
    height: 300,
    linkUrl: '/',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
