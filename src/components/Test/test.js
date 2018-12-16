import React, { Component } from "react";
import { withNamespaces } from "react-i18next";
import { NavLink } from "react-router-dom";

class Test extends Component {
  render() {
    return (
      <nav className="bert">
        <ul className="bert2">
          <div className="bert__list--item">Hello Vasco</div>

          <li className="bert__list--item">
            {" "}
            <NavLink exact to="/">
              {this.props.t("nav.campaigns")}
            </NavLink>
          </li>
          <li className="bert__list--item">
            {" "}
            <NavLink to="/quicksms">{this.props.t("nav.quicksms")}</NavLink>
          </li>
          <li className="bert__list--item">
            {" "}
            <NavLink to="/statistics">{this.props.t("nav.statistics")}</NavLink>
          </li>
          <li className="bert__list--item">
            {" "}
            <NavLink to="/reports">{this.props.t("nav.reports")}</NavLink>
          </li>
          <li className="bert__list--item">
            {" "}
            <NavLink to="/billings">{this.props.t("nav.billings")}</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
export default withNamespaces("common")(Test);
