import React, { Component } from "react";
import { withNamespaces } from "react-i18next";
// import Status from "../components/Status/Status";
import Template from "../components/Template/Template";
import ContactList from "../components/ContactList/ContactList";

class Campaigns extends Component {
  render() {
    return (
      <div className="campaigns__grid">
        {/* <p>Campaigns Container</p> */}
        {/* <Status /> */}
        <Template />
        <ContactList />
      </div>
    );
  }
}
export default withNamespaces("common")(Campaigns);
