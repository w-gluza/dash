import React, { Component } from "react";
import { withNamespaces } from "react-i18next";

class AvailableCreditBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      percentage: 75
    };
  }

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
  return <div className="filler" style={{ width: `${props.percentage}%` }} />;
};

export default withNamespaces("common")(AvailableCreditBar);
