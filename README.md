# Charts.css React

A light wrapper of react components for [chartscss](https://chartscss.org). This
library attempts to create utility components around the framework.

## Motivation

[accessibility](https://github.com/ChartsCSS/charts.css/issues/13)

## Usage

For details on using the css utility framework please see the Charts.css
[website](https://chartscss.org/docs/usage/)

### Simple Chart

The default chart is a bar chart.

```typescript
import { CSSProperties } from 'react';
import { Chart } from 'hollanddd/chart-css-react';

<Chart>
  <tr>
    <th scope="row">Four</th>
    <td style={{"--size": "calc(90/100)"} as CSSProperties }>$90K</td>
  </tr>
  <tr>
    <th scope="row">Five</th>
    <td>$100K</td>
  </tr>
</Chart>
```

### Chart With Data Component

The `Data` component converts properties to the `CSSProperties` type required by
style. `size` is a string of css `calc()` function or float "0.0" to "1.0".

```typescript
import { Chart, Data } from 'hollanddd/chart-css-react';

<Chart>
  <tr>
    <th scope="row">Four</th>
    <Data size="calc(90/100)">$90k</Data>
  </tr>
  <tr>
    <th scope="row">Five</th>
    <Data>$100k</Data>
  </tr>
</Chart>
```

It's possible to use the data component with the `area` and `line` chart type.

```typescript
import { Chart, Data } from 'hollanddd/chart-css-react';

<Chart type="area">
  <tr>
    <Data start="0.2" size="0.4" />
  </tr>
  <tr>
    <Data start="0.4" size="0.8" />
  </tr>
  <tr>
    <Data start="0.8" size="0.6" />
  </tr>
  <tr>
    <Data start="0.6" size="1.0" />
  </tr>
  <tr>
    <Data start="1.0" size="0.3" />
  </tr>
</Chart>
```

### Usage Example from Docs

```typescript
import { CSSProperties } from 'react';
import { Chart, Legend, Header } from 'hollanddd/chart-css-react';

<div id="my-chart">
  <Legend labels={['USA', 'GBR', 'CHN']}/>
  <Chart heading="My Chart Heading">
    <Header labels={['Country', 'Gold', 'Silver', 'Bronze']} />
    <tr>
      <th scope="row">USA</th>
      <td>46</td>
      <td>37</td>
      <td>48</td>
    </tr>
    <tr>
      <th scope="row">GBR</th>
      <td>27</td>
      <td>23</td>
      <td>17</td>
    </tr>
    <tr>
      <th scope="row">CHN</th>
      <td>27</td>
      <td>23</td>
      <td>17</td>
    </tr>
  </Chart>
</div>
```

