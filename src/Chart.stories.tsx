import React, { CSSProperties } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Chart, ChartProps, Data } from './'

export default {
  title: 'ChartBase',
  component: Chart,
  argTypes: {
    header: {
      control: {
        type: 'text'
      }
    }
  }
} as Meta

export const Default: Story<ChartProps> = ({ ...args }) => (
  <Chart {...args}>
    <tr>
      <th scope='row'>One</th>
      <Data size='calc(40/100)'>$40K</Data>
    </tr>
    <tr>
      <th scope='row'>Two</th>
      <Data size='calc(60/100)'>$60K</Data>
    </tr>
    <tr>
      <th scope='row'>Three</th>
      <Data size='calc(75/100)'>$75K</Data>
    </tr>
    <tr>
      <th scope='row'>Four</th>
      <td style={{ '--size': 'calc(90/100)' } as CSSProperties}>$90K</td>
    </tr>
    <tr>
      <th scope='row'>Five</th>
      <td>$100K</td>
    </tr>
  </Chart>
)

export const Reversed = Default.bind({})
Reversed.args = { reverse: true }

export const WithReversedData = Default.bind({})
WithReversedData.args = { reverseData: true }

export const Labeled = Default.bind({})
Labeled.args = { label: true }

export const WithPrimaryAxis = Default.bind({})
WithPrimaryAxis.args = { label: true, showPrimaryAxis: true }

export const WithSecondaryAxis = Default.bind({})
WithSecondaryAxis.args = { label: true, showSecondaryAxes: 4 }

export const WithDataAxes = Default.bind({})
WithDataAxes.args = { label: true, showDataAxes: true }

export const WithSpacing = Default.bind({})
WithSpacing.args = { spacing: 10 }

export const WithHeading: Story<ChartProps> = ({ ...args }) => (
  <Chart {...args}>
    <tr>
      <th scope='row'>One</th>
      <Data size='calc(40/100)'>$40K</Data>
    </tr>
    <tr>
      <th scope='row'>Two</th>
      <Data size='calc(60/100)'>$60K</Data>
    </tr>
    <tr>
      <th scope='row'>Three</th>
      <Data size='calc(75/100)'>$75K</Data>
    </tr>
    <tr>
      <th scope='row'>Four</th>
      <td style={{ '--size': 'calc(90/100)' } as CSSProperties}>$90K</td>
    </tr>
    <tr>
      <th scope='row'>Five</th>
      <td>$100K</td>
    </tr>
  </Chart>
)
WithHeading.args = {
  heading: 'Custom Header'
}

export const WithReversedDatasets: Story<ChartProps> = ({ ...args }) => (
  <Chart {...args}>
    <tr>
      <Data size='calc(40/100)'>$40K</Data>
      <Data size='calc(60/100)'>$60K</Data>
      <Data size='calc(75/100)'>$75K</Data>
      <td style={{ '--size': 'calc(90/100)' } as CSSProperties}>$90K</td>
      <td>$100K</td>
    </tr>
    <tr>
      <Data size='calc(45/100)'>$45K</Data>
      <Data size='calc(65/100)'>$65K</Data>
      <Data size='calc(85/100)'>$85K</Data>
      <td style={{ '--size': 'calc(95/100)' } as CSSProperties}>$95K</td>
      <td>$100K</td>
    </tr>
  </Chart>
)
WithReversedDatasets.args = {
  multiple: true,
  reverseDatasets: true
}

export const WithReversedDataAndDatasets = WithReversedDatasets.bind({})
WithReversedDataAndDatasets.args = {
  multiple: true,
  reverseData: true,
  reverseDatasets: true
}
export const WithToolTip: Story<ChartProps> = ({ ...args }) => (
  <Chart {...args}>
    <tr>
      <Data size='calc(45/100)' toolTip='with a tool tip'>
        $45K
      </Data>
    </tr>
  </Chart>
)
WithToolTip.args = {}

export const Stacked = WithReversedDatasets.bind({})
Stacked.args = {
  multiple: true,
  stacked: true
}

export const ColumnChart = Default.bind({})
ColumnChart.args = { type: 'column', style: { height: '200px' } }

export const AreaChart: Story<ChartProps> = ({ ...args }) => (
  <Chart {...args}>
    <tr>
      <Data start='0.2' size='0.4' />
    </tr>
    <tr>
      <Data start='0.4' size='0.8' />
    </tr>
    <tr>
      <Data start='0.8' size='0.6' />
    </tr>
    <tr>
      <Data start='0.6' size='1.0' />
    </tr>
    <tr>
      <Data start='1.0' size='0.3' />
    </tr>
  </Chart>
)
AreaChart.args = { type: 'area', style: { height: '200px' } }

export const LineChart: Story<ChartProps> = ({ ...args }) => (
  <Chart {...args}>
    <tr>
      <Data start='0.2' size='0.4' />
    </tr>
    <tr>
      <Data start='0.4' size='0.8' />
    </tr>
    <tr>
      <Data start='0.8' size='0.6' />
    </tr>
    <tr>
      <Data start='0.6' size='1.0' />
    </tr>
    <tr>
      <Data start='1.0' size='0.3' />
    </tr>
  </Chart>
)
LineChart.args = { type: 'line', style: { height: '200px' } }

export const MultipleAreaChart: Story<ChartProps> = ({ ...args }) => (
  <Chart {...args}>
    <tr>
      <Data start='0.1' size='0.5' />
      <Data start='0.0' size='0.2' />
      <Data start='0.2' size='0.4' />
    </tr>
    <tr>
      <Data start='0.5' size='0.8' />
      <Data start='0.2' size='0.5' />
      <Data start='0.4' size='0.1' />
    </tr>
    <tr>
      <Data start='0.8' size='0.4' />
      <Data start='0.5' size='0.3' />
      <Data start='0.1' size='0.2' />
    </tr>
  </Chart>
)
MultipleAreaChart.args = {
  type: 'area',
  multiple: true,
  style: { height: '200px' }
}
