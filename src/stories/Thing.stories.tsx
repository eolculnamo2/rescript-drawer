import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Drawer } from '../dist/index';
import { Props } from '../dist/Drawer.gen';

const meta: Meta = {
  title: 'Drawer',
  component: Drawer
};

export default meta;


const Template: Story<Props> = (args) => <Drawer {...args}>
  <ul>Option 1</ul>
  <ul>Option 2</ul>
  <ul>Option 3</ul>
</Drawer>;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  styleOptions: {
    // primary: "red",
    // secondary: "blue",
    // fontColor: "green",
    // menuColor: "orange",
  }
};
