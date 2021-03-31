import React from 'react'
import { Chart, IChartProps, SeriesData, Row } from './Chart'

export interface BarChartProps extends IChartProps {
  /**
   * The data property of a dataset for a bar chart is specified as an array of
   * numbers. Each point in the data array corresponds to the label at the same
   * index on the x axis.
   *
   *   data: [20, 10]
   *
   * number[][] Creates multiple chart. Useful for using stacked charts
   *
   *   data: [[5,6], [-3,-6]]
   *
   * @default []
   */
  data?: number[] | number[][]
  /**
   * Override max derived from provided data. Useful for associating max to
   * multiple charts or adding buffer to top of chart.
   */
  max?: number
  /**
   * Specify the dataset as series data
   *
   *   data: [{label:'2016-12-25', value:20}, {label:'2016-12-26', value:10}]
   */
  seriesData?: SeriesData[]
}
/**
 * Bar Chart
 *
 * Creates a bar chart. Providing optional data array will generate chart. Defer
 * to child nodes when no data provided.
 */
export const BarChart: React.FC<BarChartProps> = ({
  data = [],
  max,
  seriesData = undefined,
  children,
  ...props
}) => {
  const rows: React.ReactNode[] = []
  const datumType = Array.isArray(data[0]) ? 'array' : typeof data[0]
  switch (datumType) {
    case 'array': {
      props.multiple = true
      const collection = (data as number[][]).map((v: number[], i: number) => {
        return <Row key={i} data={v} max={max} hidable={props.hideData} />
      })
      rows.push(collection)
      break
    }
    case 'number': {
      max = max ?? Math.max(...(data as number[]))
      const collection = (data as number[]).map((v: number, i: number) => {
        return <Row key={i} data={v} max={max} hidable={props.hideData} />
      })
      rows.push(collection)
      break
    }
    default:
      break
  }
  if (seriesData) {
    props.label = true
    const values = seriesData.map(({ value }) => value)
    max = max ?? Math.max(...values)
    const collection = seriesData.map(({ label, value }) => {
      return (
        <Row
          key={label}
          label={label}
          data={value}
          max={max}
          hidable={props.hideData}
        />
      )
    })
    rows.push(collection)
  }
  return (
    <Chart type='bar' {...props}>
      {rows || children}
    </Chart>
  )
}
