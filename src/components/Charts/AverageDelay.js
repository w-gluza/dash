import React, { Component } from "react";
import { withNamespaces } from "react-i18next";

import { PieChart, Pie, Tooltip, Cell } from "recharts";

class ProcessedMessages extends Component {
  render() {
    const data = [
      { name: "SMS Delivere", value: 93 },
      { name: "SMS Delayed", value: 7 }
    ];
    const COLORS = ["#1da598", "#ef5350"];

    return (
      <div>
        <div style={{ position: "relative" }}>
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
          <div className="pie__text__supercontainer">
            <div className="pie__text__container">
              <p className="pie__top__text">
                {this.props.t("BI.averageDelay")}
              </p>
              <p className="pie__top__number">2min</p>
              <p className="pie__bottom__text"> {this.props.t("BI.smsSend")}</p>
              <p className="pie__bottom__number"> 485</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withNamespaces("common")(ProcessedMessages);
