import React, { Component } from "react";
import { withNamespaces } from "react-i18next";
import NewSmsTemplate from "../components/Templates/NewSmsTemplate";
import NewContactList from "../components/Templates/NewContactList";

class Campaigns extends Component {
  render() {
    return (
      <section className="campaigns__grid">
        {/* <NewCampaign /> */}
        <NewSmsTemplate />
        <NewContactList />
      </section>
    );
  }
}
export default withNamespaces("common")(Campaigns);
