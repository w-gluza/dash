import React, { Component } from "react";
import { withNamespaces } from "react-i18next";

import { PieChart, Pie, Tooltip, Cell } from "recharts";

class SuccessRate extends Component {
  render() {
    const data = [
      { name: "SMS Delivere", value: 95 },
      { name: "SMS Delayed", value: 5 }
    ];
    const COLORS = ["#1da598", "#ef5350"];

    return (
      <div style={{ position: "relative" }}>
        <PieChart width={300} height={300}>
          <Pie
            dataKey="value"
            isAnimationActive={true}
            data={data}
            innerRadius={80}
            outerRadius={100}
            paddingAngle={2}
            fill="fill"
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
        <div className="pie__container">
          <div>
            <p className="pie__top__text">{this.props.t("BI.successRate")}</p>
            <p className="pie__top__number">95%</p>
            <p className="pie__bottom__text">
              {this.props.t("BI.totalNumber")}
            </p>
            <p className="pie__bottom__number"> 1245</p>
          </div>
        </div>
      </div>
    );
  }
}
export default withNamespaces("common")(SuccessRate);
