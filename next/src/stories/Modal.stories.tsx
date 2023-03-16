import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import MoalWrapper from '../components/common/modal';

export default {
  title: 'Modal',
  component: MoalWrapper,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof MoalWrapper>;

const Template: ComponentStory<typeof MoalWrapper> = (args) => (
  <MoalWrapper {...args}>
    <div>Modal SotryBook</div>
  </MoalWrapper>
);

export const Primary = Template.bind({});

Primary.args = {
  modalIsOpen: true,
  onClose: action('closed'),
};
