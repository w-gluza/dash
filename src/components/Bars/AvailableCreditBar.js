import React, { Component } from "react";
import { withNamespaces } from "react-i18next";
import { getItem } from "../../localStorage";

class AvailableCreditBar extends Component {
  render() {
    return <ProgressBar t={this.props.t} />;
  }
}

const ProgressBar = props => {
  const AvailableCreditsInfo = getItem("AvailableCreditsInfo", false);

  const acquired = AvailableCreditsInfo
    ? AvailableCreditsInfo[0].Acquired
    : 2000;

  const percentage = Math.max(0, Math.min(100, (acquired / 10000) * 100));

  return (
    <div className="available__credit__container">
      <p className="available__credit__heading">{props.t("topNav.credit")}</p>
      <div className="available__credit__bar">
        <Filler percentage={percentage} />
      </div>
      <p className="available__credit__subheading">{acquired}</p>
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
