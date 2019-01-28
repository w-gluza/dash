import React, { Component } from "react";
import { withNamespaces } from "react-i18next";
import Icon from "../../assets/icons/";

class LogoAnimation extends Component {
  render() {
    return (
      <div className="icon__animation">
        <Icon
          name="logoIcon"
          className="logo__icon"
          alt={this.props.t("sideNav.altLinkReports")}
        />
      </div>
    );
  }
}
export default withNamespaces("common")(LogoAnimation);
