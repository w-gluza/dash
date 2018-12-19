import React, { Component } from "react";
import { withNamespaces } from "react-i18next";
import json from "../assets/json/credit";
import { getItem, setItem } from "../localStorage";

import Billing from "../components/Billing/Billing";
import Pricing from "../components/Pricing/Pricing";

class Billings extends Component {
  state = {
    AvailableCreditsInfo: getItem(
      "AvailableCreditsInfo",
      json.AvailableCreditsInfo
    )
  };

  handleAddCredits = amount => {
    this.setState(state => {
      const AvailableCreditsInfo = state.AvailableCreditsInfo[0];

      const newAvailableCreditsInfo = {
        ...AvailableCreditsInfo,
        Acquired: parseInt(AvailableCreditsInfo.Acquired) + amount
      };

      setItem("AvailableCreditsInfo", [newAvailableCreditsInfo]);

      return {
        AvailableCreditsInfo: [newAvailableCreditsInfo]
      };
    });
  };

  render() {
    return (
      <div>
        <Billing AvailableCreditsInfo={this.state.AvailableCreditsInfo} />
        <Pricing handleAddCredits={this.handleAddCredits} />
      </div>
    );
  }
}
export default withNamespaces("common")(Billings);
