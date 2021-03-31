import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { AreaChart, AreaChartProps } from './'

export default {
  title: 'AreaChart',
  component: AreaChart,
  argTypes: {
    stacked: {
      defaultValue: false
    }
  }
} as Meta

export const Default: Story<AreaChartProps> = ({ ...args }) => (
  <AreaChart hideData {...args} style={{ height: '200px' }} />
)
Default.args = {
  data: [2, 4, 8, 6, 10, 3]
}

export const WithMultipleCharts = Default.bind({})
WithMultipleCharts.args = {
  data: [
    [1, 5, 0, 2, 2, 4],
    [5, 8, 2, 5, 4, 1],
    [8, 4, 5, 3, 1, 2]
  ]
}

export const WithSeriesData = Default.bind({})
WithSeriesData.args = {
  seriesData: [
    { label: 'one', value: 45 },
    { label: 'two', value: 90 },
    { label: 'three', value: 75 },
    { label: 'four', value: 60 }
  ]
}
