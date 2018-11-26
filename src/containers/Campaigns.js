import React, { Component } from "react";
import { withNamespaces } from "react-i18next";
import Status from "../components/Status/Status";

class Campaigns extends Component {
  render() {
    return (
      <div>
        <p>Campaigns Container</p>
        <Status />
      </div>
    );
  }
}
export default withNamespaces("common")(Campaigns);
