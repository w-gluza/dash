import React, { Component } from "react";
import { withNamespaces } from "react-i18next";
import NewSMS from "../components/Templates/NewSMS";

class QuickSMS extends Component {
  render() {
    return (
      <section>
        <NewSMS />
      </section>
    );
  }
}
export default withNamespaces("common")(QuickSMS);
