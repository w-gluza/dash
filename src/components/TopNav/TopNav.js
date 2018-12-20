import React, { Component } from "react";
import { withNamespaces } from "react-i18next";
import User from "../User/User";
import AvailableCreditBar from "../Bars/AvailableCreditBar";

class TopNav extends Component {
  render() {
    const { i18n } = this.props;

    return (
      <div className="topnav">
        <AvailableCreditBar />
        <User />
        <nav className="nav__lang">
          <button
            className={`nav__lang__item ${
              i18n.language === "en" ? "nav__lang__item__active" : ""
            }`}
            onClick={() => i18n.changeLanguage("en")}
          >
            en
          </button>
          {" / "}
          <button
            className={`nav__lang__item ${
              i18n.language === "pt" ? "nav__lang__item__active" : ""
            }`}
            onClick={() => i18n.changeLanguage("pt")}
          >
            pt
          </button>
          {" / "}
          <button
            className={`nav__lang__item ${
              i18n.language === "es" ? "nav__lang__item__active" : ""
            }`}
            onClick={() => i18n.changeLanguage("es")}
          >
            es
          </button>
        </nav>
      </div>
    );
  }
}
export default withNamespaces("common")(TopNav);
