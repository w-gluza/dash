import React, { Component } from "react";
import { withNamespaces } from "react-i18next";

import Report from "../components/Report/Report";

class Reports extends Component {
  render() {
    return (
      <div>
        <p>Reports Container</p>
        <Report />
      </div>
    );
  }
}
export default withNamespaces("common")(Reports);