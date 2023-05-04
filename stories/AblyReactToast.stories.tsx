import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { AblyReactToast } from '../src';

const meta: Meta = {
  title: 'AblyReactToast',
  component: AblyReactToast,
  argTypes: {
    channelName: {
      defaultValue: 'notifications',
      control: {
        type: 'text',
      },
    },
    position: {
      defaultValue: 'top-left',
      control: {
        type: 'text',
      },
    },
    theme: {
      defaultValue: 'dark',
      control: {
        type: 'text',
      },
    },
  },
};

export default meta;

const Template: StoryFn = args => {
  return (
    <div style={{ width: '100%', height: '50vh' }}>
      <AblyReactToast {...args} />
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {
  channelName: 'notifications',
  position: 'top-left',
  theme: 'dark',
}


