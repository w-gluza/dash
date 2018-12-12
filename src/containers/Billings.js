import React, { Component } from "react";
import { withNamespaces } from "react-i18next";

import Credit from "../components/Credit/Credit";
import Pricing from "../components/Pricing/Pricing";

class Billings extends Component {
  render() {
    return (
      <div>
        <p>Billings Container</p>
        <Credit />
        <Pricing />
      </div>
    );
  }
}
export default withNamespaces("common")(Billings);
