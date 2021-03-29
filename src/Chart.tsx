import * as React from 'react'
import './index.css'
import './Chart.module.scss'
/**
 * Available chart types provided by chart.css
 *
 * https://chartscss.org/charts/
 */
export type ChartTypes =
  | 'bar'
  | 'column'
  | 'area'
  | 'line'
  | 'pie'
  | 'donut'
  | 'radar'
  | 'polar'
/**
 * Represents properties for creating a new chart.
 */
export interface IChartProps extends React.HTMLAttributes<HTMLTableElement> {
  /**
   * The type of chart.
   *
   * @default bar
   */
  type?: ChartTypes
  /**
   * The heading to apply to the chart.
   *
   * @default
   */
  heading?: string
  /**
   * True when the table contains many `<td>` tags in a `<tr>`.
   */
  multiple?: boolean
  /**
   * Reverse the chart direction.
   *
   * @default false
   */
  reverse?: boolean
  /**
   * Reverse the data order of the chart.
   *
   * @default false
   */
  reverseData?: boolean
  /**
   * Reverse the chart's dataset order.
   *
   * @default false
   */
  reverseDatasets?: boolean
  /**
   * Display chart labels.
   *
   * @default false
   */
  label?: boolean
  /**
   * Add a primary axis to separate the labels from the chart.
   *
   * @default false
   */
  showPrimaryAxis?: boolean
  /**
   * Add secondary axes to table.
   *
   * @default 0
   */
  showSecondaryAxes?: number
  /**
   * Add auto-generated data axes. Number based on the amount of
   * rows (`<tr>` tags) contained in the table.
   */
  showDataAxes?: boolean
  /**
   * Add spacing between data items.
   *
   * @default none
   */
  spacing?: number
  /**
   * Add spacing between datasets.
   *
   * @default none
   */
  datasetSpacing?: number
  /**
   * Stacks items side-by-side when true and type is of bar chart or column.
   *
   * To change the display between simple stacked view to percentage stacked
   * view, you need to change the --size property.
   *
   * https://chartscss.org/components/stacked/#simple-vs-percentage
   *
   * @default none
   */
  stacked?: boolean
}
/**
 * Properties of a new chart
 */
export interface ChartProps extends IChartProps {}
/**
 * Charts.css is an open source CSS framework for data visualization.
 *
 * Visualization help end-users understand data. Charts.css help frontend
 * developers turn data into beautiful charts and graphs using simple CSS
 * classes.
 *
 * The data is structured using semantic HTML tags and styled using CSS classes
 * which change the visual representation displayed to the end user.
 */
export const Chart: React.FC<ChartProps> = ({
  type = 'bar',
  heading,
  multiple,
  reverse,
  reverseData,
  reverseDatasets,
  label,
  showPrimaryAxis,
  showSecondaryAxes,
  showDataAxes,
  spacing,
  datasetSpacing,
  stacked = false,
  children,
  ...rest
}) => {
  const variations: string[] = []
  // add variations
  if (multiple) variations.push('multiple')
  if (reverse) variations.push('reverse')
  if (reverseData) variations.push('reverse-data')
  if (reverseDatasets) variations.push('reverse-datasets')
  if (label) variations.push('show-labels')
  if (showPrimaryAxis) variations.push('show-primary-axis')
  if (showSecondaryAxes)
    variations.push(`show-${showSecondaryAxes}-secondary-axes`)
  if (showDataAxes) variations.push('show-data-axes')
  if (spacing) variations.push(`data-spacing-${spacing}`)
  if (datasetSpacing) variations.push(`dataset-spacing-${datasetSpacing}`)
  if (heading) variations.push('show-heading')
  if (stacked) variations.push('stacked') // should we check for chart type?
  // construct variant
  const variant: string = variations.join(' ')

  return (
    <table className={`charts-css ${type} ${variant}`} {...rest}>
      {heading ? <caption>{heading}</caption> : ''}
      <tbody>{children}</tbody>
    </table>
  )
}
/**
 * Properties for defining a single data element within a chart.
 */
export interface DataProps
  extends React.HTMLAttributes<HTMLTableDataCellElement> {
  /**
   * The size of chart element expressed as a CSS calc() function or a float.
   *
   * https://developer.mozilla.org/en-US/docs/Web/CSS/calc()
   *
   * @default full width
   */
  size?: string
  /**
   * The data cell start position.
   *
   * @default none
   */
  start?: string
  /**
   * Optional value to display in the chart element.
   *
   * @default none
   */
  value?: string
}
/**
 * Data for a single chart element as represented by a `<td>` element.
 *
 * This provides a convinience wrapper around defining the size of a chart
 * element.
 */
export const Data: React.FC<DataProps> = ({
  size,
  start,
  children,
  ...rest
}) => {
  const style = { '--size': size, '--start': start }
  return (
    <td style={style as React.CSSProperties} {...rest}>
      {children}
    </td>
  )
}
/**
 * Tooltip
 */
export const Tip: React.FC<{}> = ({ children }) => (
  <span className='tooltip'>{children}</span>
)
/**
 * Represent properties for a new legend
 */
export interface LegendProps {
  /**
   * Orientation of the legend
   *
   * @default verticle
   */
  orientation?: 'inline'
  /**
   * Shape of the label
   *
   * @default list decoration
   */
  shape?: 'circle' | 'elipse' | 'square' | 'rectangle' | 'rhombus' | 'line'
  /**
   * List of labels
   */
  labels: string[]
  /**
   * Returns an ordered list when true
   *
   * @default false
   */
  ordered?: boolean
}
/**
 * Legend displays the labels of the datasets that appear on a chart.
 *
 * The legend is a separate component with a separate HTML tag. You have the
 * freedom to position the legend wherever you want. Just like any other HTML
 * tag.
 *
 * Note: Currently legend require the use of <ul> + <li> or <ol> + <li> tags. In
 * the next versions you will have the freedom to use any HTML tag.
 *
 */
export const Legend: React.FC<LegendProps> = ({
  labels,
  shape,
  orientation,
  ordered = false
}) => {
  const variations: string[] = ['charts-css', 'legend']
  if (shape) {
    variations.push(`legend-${shape}`)
  }
  if (orientation) variations.push(`legend-${orientation}`)
  const variant = variations.join(' ')

  return ordered ? (
    <ol className={variant}>
      {labels.map((label, i) => (
        <li key={i}>{label}</li>
      ))}
    </ol>
  ) : (
    <ul className={variant}>
      {labels.map((label, i) => (
        <li key={i}>{label}</li>
      ))}
    </ul>
  )
}
/**
 * Adds table head
 */
export const Header: React.FC<{ labels: string[] }> = ({ labels }) => (
  <thead>
    <tr>
      {labels.map((label, i) => (
        <th key={i} scope='col'>
          {label}
        </th>
      ))}
    </tr>
  </thead>
)
