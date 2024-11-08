import React from 'react'
import { LineChart as LChart, Bar, XAxis, YAxis,Line, Tooltip, Legend, CartesianGrid, Area,ComposedChart } from 'recharts';
function LineChart() {
    const studentMarksData = [
        { id: 1, name: 'Alice', math: 35, physics: 5, chemistry: 82 },
        { id: 2, name: 'Bob', math: 48, physics: 20, chemistry: 80 },
        { id: 3, name: 'Charlie', math: 52, physics: 15, chemistry: 91 },
        { id: 4, name: 'David', math: 34, physics: 40, chemistry: 75 },
        { id: 5, name: 'Eve', math: 38, physics: 10, chemistry: 89 },
        { id: 6, name: 'Frank', math: 29, physics: 60, chemistry: 78 },
        { id: 7, name: 'Grace', math: 14, physics: 5, chemistry: 93 },
        { id: 8, name: 'Hannah', math: 21, physics: 10, chemistry: 80 },
        { id: 9, name: 'Isaac', math: 36, physics: 15, chemistry: 77 },
        { id: 10, name: 'Jack', math: 59, physics: 10, chemistry: 86 }
      ];
  return (
    <div>
        {/* Line Chart */}
        <LChart width={500} height={400} data={studentMarksData}>
        <YAxis></YAxis>
        <XAxis dataKey="name" />
            <Line dataKey="math" stroke='yellow'></Line>
            <Line dataKey="physics" stroke='red'></Line>
            <Line dataKey="chemistry" stroke='white'></Line>
        </LChart>
        {/* compose chart */}
        <ComposedChart width={730} height={250} data={studentMarksData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend/>
            <CartesianGrid stroke="#f5f5f5" />
            <Area type="monotone" dataKey="physics" fill="#8884d8" stroke="#8884d8" />
            <Bar dataKey="math" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="chemistry" stroke="#ff7300" />
        </ComposedChart>
    </div>
  )
}

export default LineChart