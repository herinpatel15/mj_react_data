import React from 'react'
import Data from '../data/data.json'
import Data1 from '../data/data1.json'
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

function Graph() {

  return (
    <div>
        <ResponsiveContainer width="100%" aspect={2.5}>
        <AreaChart
          data={Data1}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Time" />
          <YAxis />
          <Tooltip />
          <Legend />
          {/* <Area type="monotone" dataKey="Voltage" stroke="#8884d8" fill="#8884d8" /> */}
          <Area type="" dataKey="Current" stroke="#82ca9d" fill="#ffff00"/>
          {/* <Area type="monotone" dataKey="Voltage" stroke="#85c55d" fill="#ff0f00"/> */}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Graph