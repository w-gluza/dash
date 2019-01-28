import React, { Component } from "react";
import { withNamespaces } from "react-i18next";
import { NavLink } from "react-router-dom";
import Icon from "../../assets/icons/";

class SideNav extends Component {
  render() {
    return (
      <nav className="sidenav">
        <NavLink exact to="/" activeClassName="sidenav__list--activelink">
          <h1 className="sidenav__title">
            <Icon
              name="favicon"
              className="sidenav__icon--title"
              alt={this.props.t("sideNav.altLinkEZ4U")}
            />
            Ez4U
          </h1>
        </NavLink>
        <ul>
          <li className="sidenav__list--item">
            <NavLink
              exact
              to="/campaigns"
              activeClassName="sidenav__list--activelink"
            >
              <Icon
                name="inbox"
                className="sidenav__icon"
                alt={this.props.t("sideNav.altLinkCampaings")}
              />
              {this.props.t("sideNav.campaigns")}
            </NavLink>
          </li>
          <li className="sidenav__list--item">
            <NavLink to="/quicksms" activeClassName="sidenav__list--activelink">
              <Icon
                name="sms"
                className="sidenav__icon"
                alt={this.props.t("sideNav.altLinkQuickSMS")}
              />
              {this.props.t("sideNav.quicksms")}
            </NavLink>
          </li>
          <li className="sidenav__list--item">
            <NavLink
              to="/statistics"
              activeClassName="sidenav__list--activelink"
            >
              <Icon
                name="bi"
                className="sidenav__icon"
                alt={this.props.t("sideNav.altLinkStatistics")}
              />

              {this.props.t("sideNav.statistics")}
            </NavLink>
          </li>
          <li className="sidenav__list--item">
            <NavLink to="/reports" activeClassName="sidenav__list--activelink">
              <Icon
                name="report"
                className="sidenav__icon"
                alt={this.props.t("sideNav.altLinkReports")}
              />
              {this.props.t("sideNav.reports")}
            </NavLink>
          </li>
          <li className="sidenav__list--item">
            <NavLink to="/billings" activeClassName="sidenav__list--activelink">
              <Icon
                name="pricing"
                className="sidenav__icon"
                alt={this.props.t("sideNav.altLinkBillings")}
              />
              {this.props.t("sideNav.billings")}
            </NavLink>
          </li>
        </ul>
        <button className="button sidenav__button">
          <NavLink to="/billings">{this.props.t("sideNav.button")}</NavLink>{" "}
        </button>
      </nav>
    );
  }
}
export default withNamespaces("common")(SideNav);
