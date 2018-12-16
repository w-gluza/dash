import React, { Component } from "react";
import { withNamespaces } from "react-i18next";

class Status extends Component {
  render() {
    return (
      <div className="test">
<p> For test</p>
      </div>
    );
  }
}
export default withNamespaces("common")(Status);
