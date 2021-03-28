import { Story, Meta } from '@storybook/react/types-6-0';

import { Legend, LegendProps } from './index';

export default {
  title: 'ChartCSS/Legend',
  component: Legend,
} as Meta;

export const Default: Story<LegendProps> = ({ labels, ...args }) => (
  <Legend labels={['one', 'two', 'three']} {...args} />
);

export const WithShape: Story<LegendProps> = Default.bind({});
WithShape.args = { shape: 'circle' };

export const Inline: Story<LegendProps> = Default.bind({});
Inline.args = { orientation: 'inline' };

