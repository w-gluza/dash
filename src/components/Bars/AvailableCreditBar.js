import React, { Component } from "react";
import { withNamespaces } from "react-i18next";

class AvailableCreditBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      percentage: 55
    };
  };

  render() {
    return (
      <>
        <ProgressBar percentage={this.state.percentage} />
      </>
    );
  }
}

const ProgressBar = props => {
  return (
    <div className="available__credit__container">
      <p className="available__credit__heading">Available Credits </p>
      <div className="available__credit__bar">
        <Filler percentage={props.percentage} />
      </div>
      <p className="available__credit__subheading"> 3553 SMS </p>
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