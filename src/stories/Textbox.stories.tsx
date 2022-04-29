import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Textbox from '../components/atoms/Textbox';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Textbox',
  component: Textbox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Textbox>;
