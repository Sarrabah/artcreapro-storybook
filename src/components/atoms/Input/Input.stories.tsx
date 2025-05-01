import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
    title: 'Components/Input',
    component: Input ,
argTypes:{
    disable: {
        control: { type: 'boolean' },
      },
    placeholder:{
        control :{ type: 'text'}
    },
    radiusSize: {
        control: { type: 'select' },
        options: ['xs', 'none'],
      },
},
args: {
    disable: false,
    placeholder: "Email",
    radiusSize: 'none'
}} satisfies Meta<typeof Input>;
  
export default meta;
  
type Story = StoryObj<typeof meta>;
  
export const Primary: Story = {};
