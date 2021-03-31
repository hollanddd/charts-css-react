# Charts.css for React

<img src="https://charts-css-react.github.io/docs/assets/image/logo-animation.svg" width="125"/>

React components for [chartscss](https://chartscss.org).

![Version](https://badgen.net/npm/v/charts-css-react)

## Install

### Npm

`npm i charts-css-react`

### Yarn

`yarn add charts-css-react`

## Motivation

[accessibility](https://github.com/ChartsCSS/charts.css/issues/13)

## Usage

For details on using the css utility framework please see the Charts.css
[website](https://chartscss.org/docs/usage/)

### Chart

The base component for charts. It's possible to create any of the
[supported](https://chartscss.org/development/roadmap/) charts.

> Charts.css is a modern CSS framework. It uses CSS utility classes to style
> HTML elements as charts.

The Chart component raises those utility classes to a component and relies on
naive logic to apply them. The intent is to surface the underlying framework to 
build higher level components for simple convenience if needed. _Experimental_

```typescript
import { CSSProperties } from 'react';
import { Chart } from 'hollanddd/chart-css-react';

<Chart hideData showDataOnHover>
  <tr>
    <th scope="row">Example</th>
    <td style={{"--size": "calc(90/100)"} as CSSProperties }>$90K</td>
  </tr>
  <tr>
    <th scope="row">Example</th>
    <td>$100K</td>
  </tr>
</Chart>
```

### Higher Order Chart Component

Bar, column, area, and line chart higher order components are available for
building charts from a data object.

```typescript
<Bar data={[40, 60, 75, 80, 100]} />
```

Providing a matrix automatically applies the multiple utility class.

```typescript
<Area data={[[40, 60], [75, 80]]} />
```

### Data Component

The `Data` component is a wrapper around `td` and performs some functions such
as converting size to the `CSSProperties` type required by style.

- `size` is a string of css `calc()` function or float "0.0" to "1.0".
- `toolTip` optional message to display on hover

```typescript
import { Chart, Data } from 'hollanddd/chart-css-react';

<Chart>
  <tr>
    <th scope="row">One</th>
    <Data size="calc(90/100)">$90k</Data>
  </tr>
  <tr>
    <th scope="row">Two</th>
    <Data toolTip="this is a tooltip">$100k</Data>
  </tr>
</Chart>
```

The `AreaChart` and `LineChart` components abstract away the need to write table
row and data cell elements.

```typescript

import { AreaChart } from 'hollanddd/chart-css-react';

<Area data={[2, 4, 8, 6, 1, 3]} />
```

_Same example but using the base `Chart` component_

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

## License

**Charts.CSS React** and **Charts.CSS** are licensed under the [MIT license](https://opensource.org/licenses/MIT).

**Charts.CSS React** is not affiliated with the creators of **Charts.CSS**.
