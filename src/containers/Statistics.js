import React, { Component } from "react";
import { withNamespaces } from "react-i18next";

import Chart from "../components/Charts/Chart";
import SuccessRate from "../components/Charts/SuccessRate";

class Statistics extends Component {
  render() {
    return (
      <div>
        <SuccessRate />
        <Chart />
      </div>
    );
  }
}
export default withNamespaces("common")(Statistics);
