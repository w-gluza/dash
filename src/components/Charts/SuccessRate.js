import React, { Component } from "react";
import { withNamespaces } from "react-i18next";

import { PieChart, Pie, Legend, Tooltip, Cell } from "recharts";

class SuccessRate extends Component {
  render() {
    const data = [
      { name: "SMS Delivere", value: 95 },
      { name: "SMS Delayed", value: 5 }
    ];
    const COLORS = ["#1da598", "#73879c"];

    return (
      <div>
        <div className="pie__text__container">
          <p className="pie__top__text">Success Rate</p>
          <p className="pie__top__number">95%</p>
          <p className="pie__bottom__text"> SMS Send</p>
          <p className="pie__bottom__number"> 485</p>
        </div>
        <div className="pie__text__container">
          <p className="pie__top__text">Average Delay</p>
          <p className="pie__top__number">5s</p>
          <p className="pie__bottom__text"> SMS Send</p>
          <p className="pie__bottom__number"> 485</p>
        </div>
        <PieChart width={300} height={300}>
          <Pie
            isAnimationActive={true}
            data={data}
            innerRadius={80}
            outerRadius={100}
            paddingAngle={2}
            fill="fill"
            label
          >
            {data.map((entry, index) => (
              <Cell fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
    );
  }
}
export default withNamespaces("common")(SuccessRate);
