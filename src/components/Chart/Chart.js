import React, { Component } from "react";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  YAxis,
  Tooltip
} from "recharts";

class Chart extends Component {
  render() {
    const data = [
      { name: "June", sms: 4000 },
      { name: "July", sms: 3000 },
      { name: "August", sms: 2000 },
      { name: "September", sms: 2780 },
      { name: "October", sms: 1890 },
      { name: "November", sms: 2390 }
    ];
    return (
      <div className="chart">
        <LineChart
          width={600}
          height={300}
          data={data}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Line type="monotone" dataKey="sms" stroke="#00acc1" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>
    );
  }
}
export default Chart;
