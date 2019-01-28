import React, { Component } from "react";
import { withNamespaces } from "react-i18next";

class Aside extends Component {
  render() {
    return (
      <div class="container">
        <div class="circle-container">
          <div class="circle" />
        </div>
        <div class="circle-container">
          <div class="circle" />
        </div>
        <div class="circle-container">
          <div class="circle" />
        </div>
      </div>
    );
  }
}
export default withNamespaces("common")(Aside);
