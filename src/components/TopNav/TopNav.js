import React, { Component } from "react";
import { withNamespaces } from "react-i18next";

class TopNav extends Component {
  render() {
    const { i18n } = this.props;
    return (
      <nav className="topnav test">
        <button onClick={() => i18n.changeLanguage("en")}>en</button>
        <button onClick={() => i18n.changeLanguage("pt")}>pt</button>
        <button onClick={() => i18n.changeLanguage("es")}>es</button>
      </nav>
    );
  }
}
export default withNamespaces("common")(TopNav);
