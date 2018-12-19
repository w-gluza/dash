import React, { Component } from "react";
import { withNamespaces } from "react-i18next";
import { NavLink } from "react-router-dom";
import Icon from "../../assets/icons/";

class SideNav extends Component {
  render() {
    return (
      <nav className="sidenav">
        <div className="sidenav__title">
          <Icon
            name="favicon"
            className="sidenav__icon--title"
            alt="LinkedIn logo"
          />
          Ez4U
        </div>
        <ul>
          <li className="sidenav__list--item">
            <Icon name="inbox" className="sidenav__icon" alt="LinkedIn logo" />
            <NavLink exact to="/">
              {this.props.t("sideNav.campaigns")}
            </NavLink>
          </li>
          <li className="sidenav__list--item">
            <Icon name="sms" className="sidenav__icon" alt="LinkedIn logo" />
            <NavLink to="/quicksms">{this.props.t("sideNav.quicksms")}</NavLink>
          </li>
          <li className="sidenav__list--item">
            <Icon name="bi" className="sidenav__icon" alt="LinkedIn logo" />
            <NavLink to="/statistics">
              {this.props.t("sideNav.statistics")}
            </NavLink>
          </li>
          <li className="sidenav__list--item">
            <Icon name="report" className="sidenav__icon" alt="LinkedIn logo" />
            <NavLink to="/reports">{this.props.t("sideNav.reports")}</NavLink>
          </li>
          <li className="sidenav__list--item">
            <Icon
              name="pricing"
              className="sidenav__icon"
              alt="LinkedIn logo"
            />
            <NavLink to="/billings">{this.props.t("sideNav.billings")}</NavLink>
          </li>
        </ul>
        <button className="button sidenav__button"> Upgrade Package </button>
      </nav>
    );
  }
}
export default withNamespaces("common")(SideNav);
