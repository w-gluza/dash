import React, { Component } from "react";
import { withNamespaces } from "react-i18next";
// import json from "../../assets/json/credit";

class AvailableCreditBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      percentage: 55
    };
  }
  // state = {
  //   AvailableCreditsInfo: json.AvailableCreditsInfo
  // };

  render() {
    return (
      <>
        <ProgressBar percentage={this.state.percentage} />
      </>
    );
  }
}
// const { AvailableCreditsInfo } = this.state;

const ProgressBar = props => {
  return (
    <div className="available__credit__container">
      <p className="available__credit__heading">
        Available Credit
        {/* {this.props.t("topNav.credit")} */}
      </p>
      <div className="available__credit__bar">
        <Filler percentage={props.percentage} />
      </div>
      <p className="available__credit__subheading">2000</p>
    </div>
  );
};

const Filler = props => {
  return (
    <div
      className={`filler ${getColor(props.percentage)}`}
      style={{
        width: `${props.percentage}%`
      }}
    />
  );
};

const getColor = percentage => {
  if (percentage < 30) {
    return "filler__negative";
  } else if (percentage < 70) {
    return "filler__warning";
  } else {
    return "filler__positive";
  }
};

export default withNamespaces("common")(AvailableCreditBar);
