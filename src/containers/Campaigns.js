import React, { Component } from "react";
import { withNamespaces } from "react-i18next";
// import Status from "../components/Status/Status";
import NewSmsTemplate from "../components/Templates/NewSmsTemplate";
import NewContactList from "../components/Templates/NewContactList";

class Campaigns extends Component {
  render() {
    return (
      <section className="campaigns__grid">
        <NewSmsTemplate />
        <NewContactList />
      </section>
    );
  }
}
export default withNamespaces("common")(Campaigns);
