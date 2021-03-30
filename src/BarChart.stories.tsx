import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { BarChart, BarChartProps } from './'

export default {
  title: 'ChartCSS/BarChart',
  component: BarChart,
  argTypes: {
    header: {
      control: {
        type: 'text'
      }
    }
  }
} as Meta

export const Default: Story<BarChartProps> = ({ ...args }) => (
  <BarChart hideData {...args} />
)
Default.args = {
  data: [40, 60, 75, 90, 100]
}

export const WithStackedCharts = Default.bind({})
WithStackedCharts.args = {
  data: [
    [40, 60],
    [75, 90]
  ]
}

export const WithMaxOverride = Default.bind({})
WithMaxOverride.args = {
  max: 145,
  data: [
    [40, 60],
    [75, 90]
  ]
}

export const WithSeriesData = Default.bind({})
WithSeriesData.args = {
  seriesData: [
    { label: 'one', value: 45 },
    { label: 'two', value: 90 }
  ]
}
