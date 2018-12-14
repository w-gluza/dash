import React, { Component } from "react";
import { withNamespaces } from "react-i18next";

class User extends Component {
  render() {
    return (
      <div className="user__container">
        <p className="user__nick">Vasco Da Gama </p>
        <div className="circle" />
      </div>
    );
  }
}
export default withNamespaces("common")(User);
