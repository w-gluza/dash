import React, { Component } from "react";
import { withNamespaces } from "react-i18next";
import NewCampaign from "../components/NewCampaign/NewCampaign";

class QuickSMS extends Component {
  render() {
    return (
      <div>
        <p>Quick SMS container</p>
        <NewCampaign></NewCampaign>
      </div>
    );
  }
}
export default withNamespaces("common")(QuickSMS);
