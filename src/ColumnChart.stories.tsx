import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { ColumnChart, ColumnChartProps } from './'

export default {
  title: 'ColumnChart',
  component: ColumnChart,
  argTypes: {
    stacked: {
      defaultValue: false
    }
  }
} as Meta

export const Default: Story<ColumnChartProps> = ({ ...args }) => (
  <ColumnChart hideData {...args} style={{ height: '200px' }} />
)
Default.args = {
  data: [40, 60, 75, 90, 100]
}

export const WithMultipleCharts = Default.bind({})
WithMultipleCharts.args = {
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
