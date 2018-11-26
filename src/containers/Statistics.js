import React, { Component } from "react";
import { withNamespaces } from "react-i18next";

import Chart from "../components/Chart/Chart";

class Statistics extends Component {
  render() {
    return (
      <div>
        <p>BI Container</p>
        <Chart />
      </div>
    );
  }
}
export default withNamespaces("common")(Statistics);
