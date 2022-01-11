import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts'
const data = [
  { name: 'Week 1', uv: 200, pv: 2400, amt: 1200 },
  { name: 'Week 2', uv: 450, pv: 5000, amt: 3000 },
  { name: 'Week 3', uv: 500, pv: 1000, amt: 400 },
]

const renderLineChart = () => {
  return (
    <>
      <h1>Patient 001</h1>
      <LineChart
        width={600}
        height={300}
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type='monotone' dataKey='uv' stroke='#8884d8' />
        <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
      </LineChart>
    </>
  )
}
export default renderLineChart
