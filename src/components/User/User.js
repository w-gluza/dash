import React, { Component } from "react";
import { withNamespaces } from "react-i18next";

class User extends Component {
  render() {
    return (
      <div className="user">
        Vasco Da Gama
        <div className="circle" />{" "}
      </div>
    );
  }
}
export default withNamespaces("common")(User);
