import React, { Component } from "react";
import { withNamespaces } from "react-i18next";
import NewSMS from "../components/NewSMS/NewSMS";

class QuickSMS extends Component {
  render() {
    return (
      <div>
        {/* <p>Quick SMS container</p> */}
        <NewSMS></NewSMS>
      </div>
    );
  }
}
export default withNamespaces("common")(QuickSMS);
