import React, { Component } from "react";
import { withNamespaces } from "react-i18next";

class QuickSMS extends Component {
  render() {
    return (
      <div>
        <p>Quick SMS container</p>
      </div>
    );
  }
}
export default withNamespaces("common")(QuickSMS);
