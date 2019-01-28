import React, { Component } from "react";
import { withNamespaces } from "react-i18next";
import { NavLink } from "react-router-dom";
import Icon from "../../assets/icons/";

class MobileNav extends Component {
  render() {
    return (
      <nav className="mobilnav">
        <ul className="mobilnav__container">
          <div>
            <li className="mobilenav__list--item">
              <NavLink
                exact
                to="/campaigns"
                className="mobilenav__link "
                activeClassName="mobilenav__link--active"
              >
                <Icon
                  name="inbox"
                  className="mobilenav__icon"
                  alt="Campaign Links"
                />
                {this.props.t("sideNav.campaignsMobile")}
              </NavLink>
            </li>
          </div>
          <div>
            <li className="mobilenav__list--item">
              <NavLink
                exact
                to="/quicksms"
                className="mobilenav__link "
                activeClassName="mobilenav__link--active"
              >
                <Icon name="sms" className="mobilenav__icon" alt="SMS icon" />
                {this.props.t("sideNav.quicksms")}
              </NavLink>
            </li>
          </div>
          <div>
            <li className="mobilenav__list--item">
              <NavLink
                to="/statistics"
                className="mobilenav__link "
                activeClassName="mobilenav__link--active"
              >
                <Icon
                  name="bi"
                  alt="Business Inteligence Icon"
                  className="mobilenav__icon"
                />
                {this.props.t("sideNav.statisticsMobile")}
              </NavLink>
            </li>
          </div>
          <div>
            <li className="mobilenav__list--item">
              <NavLink
                to="/reports"
                className="mobilenav__link "
                activeClassName="mobilenav__link--active"
              >
                <Icon
                  name="report"
                  className="mobilenav__icon"
                  alt="Reports Icon"
                />
                {this.props.t("sideNav.reports")}
              </NavLink>
            </li>
          </div>
          <div>
            <li className="mobilenav__list--item">
              <NavLink
                to="/billings"
                className="mobilenav__link "
                activeClassName="mobilenav__link--active"
              >
                <Icon
                  name="pricing"
                  className="mobilenav__icon"
                  alt="Billings Icon"
                />
                {this.props.t("sideNav.billings")}
              </NavLink>
            </li>
          </div>
        </ul>
      </nav>
    );
  }
}
export default withNamespaces("common")(MobileNav);
