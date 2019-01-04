import React, { Component } from "react";
import { withNamespaces } from "react-i18next";

// import Chart from "../components/Charts/Chart";
import SuccessRate from "../components/Charts/SuccessRate";
import ProcessedMessages from "../components/Charts/AverageDelay";

class Statistics extends Component {
  render() {
    return (
      <section className="statistics__grid">
        <ProcessedMessages />
        <SuccessRate />
        <ProcessedMessages />
        {/* <Chart /> */}
      </section>
    );
  }
}
export default withNamespaces("common")(Statistics);
