import React, { Component } from "react";
import { withNamespaces } from "react-i18next";
import { NavLink } from "react-router-dom";
import Icon from "../../assets/icons/";

class MobileNav extends Component {
  render() {
    return (
      <nav className="mobilnav">
        <ul>
          <li className="mobilenav__list--item">
            <Icon
              name="inbox"
              className="mobilenav__icon"
              alt="LinkedIn logo"
            />
            <NavLink exact to="/">
              {this.props.t("mobilenav.campaigns")}
            </NavLink>
          </li>
          <li className="mobilenav__list--item">
            <Icon name="sms" className="mobilenav__icon" alt="LinkedIn logo" />
            <NavLink to="/quicksms">
              {this.props.t("mobilenav.quicksms")}
            </NavLink>
          </li>
          <li className="mobilenav__list--item">
            <Icon name="bi" className="mobilenav__icon" alt="LinkedIn logo" />
            <NavLink to="/statistics">
              {this.props.t("mobilenav.statistics")}
            </NavLink>
          </li>
          <li className="mobilenav__list--item">
            <Icon
              name="report"
              className="mobilenav__icon"
              alt="LinkedIn logo"
            />
            <NavLink to="/reports">{this.props.t("mobilenav.reports")}</NavLink>
          </li>
          <li className="mobilenav__list--item">
            <Icon
              name="pricing"
              className="mobilenav__icon"
              alt="LinkedIn logo"
            />
            <NavLink to="/billings">
              {this.props.t("mobilenav.billings")}
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
export default withNamespaces("common")(MobileNav);
