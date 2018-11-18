import React, { Component } from "react";
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
          Hello Vasco
        </div>
        <ul>
          <li className="sidenav__list--item">
            {" "}
            <Icon name="inbox" className="sidenav__icon" alt="LinkedIn logo" />
            List & Campaigns
          </li>
          <li className="sidenav__list--item">
            {" "}
            <Icon name="sms" className="sidenav__icon" alt="LinkedIn logo" />
            Quick SMS
          </li>
          <li className="sidenav__list--item">
            {" "}
            <Icon name="bi" className="sidenav__icon" alt="LinkedIn logo" />
            Business Inteligence
          </li>
          <li className="sidenav__list--item">
            {" "}
            <Icon name="report" className="sidenav__icon" alt="LinkedIn logo" />
            Reports
          </li>
          <li className="sidenav__list--item">
            {" "}
            <Icon
              name="pricing"
              className="sidenav__icon"
              alt="LinkedIn logo"
            />
            Billings
          </li>
        </ul>
        <button className="button sidenav__button"> Upgrade Package </button>
      </nav>
    );
  }
}
export default SideNav;
