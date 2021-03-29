import React from 'react'

import { Chart, Data } from 'charts-css-react'
import 'charts-css-react/dist/index.css'

const App = () => {
  return (
    <Chart type="area" heading="Example Chart">
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
  )
}

export default App
