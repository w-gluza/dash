import React, { Component } from "react";
import { withNamespaces } from "react-i18next";

import Credit from "../components/Credit/Credit";

class Billings extends Component {
  render() {
    return (
      <div>
        <p>Billings Container</p>
        <Credit />
      </div>
    );
  }
}
export default withNamespaces("common")(Billings);
