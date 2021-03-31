import React from 'react'
import { Chart, IChartProps, SeriesData, VectorData } from './Chart'

export interface LineChartProps extends IChartProps {
  /**
   * The data property of a dataset for a column chart is specified as an array of
   * numbers. Each point in the data array corresponds to the label at the same
   * index on the x axis.
   *
   *   data: [20, 10]
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
 * Column Chart
 *
 * Creates a column chart. Providing optional data array will generate chart. Defer
 * to child nodes when no data provided.
 */
export const LineChart: React.FC<LineChartProps> = ({
  data = [],
  max,
  seriesData = undefined,
  children,
  ...props
}) => {
  const rows = []
  const datumType = Array.isArray(data[0]) ? 'array' : typeof data[0]
  switch (datumType) {
    case 'array': {
      const len = data.length
      // initialize a placeholder for our data
      const matrix: React.ReactNodeArray[] = []
      for (let i = 0; i < (data[0] as number[]).length - 1; i++) {
        matrix[i] = []
      }
      for (let i = 0; i < len; i++) {
        const cols = (data[i] as number[]).length
        const max = Math.max(...(data[i] as number[]))
        for (let j = 0; j < cols - 1; j++) {
          matrix[j][i] = (
            <VectorData
              value={data[i][j]}
              start={`${(data[i][j] as number) / max}`}
              size={`${(data[i][j + 1] as number) / max}`}
              hidable={props.hideData}
            />
          )
        }
      }
      for (let i = 0; i < matrix.length; i++) {
        rows.push(<tr>{matrix[i]}</tr>)
      }
      break
    }
    case 'number': {
      const len = data.length
      max = max ?? Math.max(...(data as number[]))
      for (let i = 0; i < len - 1; i++) {
        rows.push(
          <tr>
            <VectorData
              value={`${data[i]}`}
              start={`${(data[i] as number) / max}`}
              size={`${(data[i + 1] as number) / max}`}
              hidable={props.hideData}
            />
          </tr>
        )
      }
      break
    }
    default:
      break
  }

  return (
    <Chart type='line' {...props}>
      {rows}
    </Chart>
  )
}
