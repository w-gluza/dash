import React, { Component } from "react";
import { withNamespaces } from "react-i18next";

class Billing extends Component {
  render() {
    return (
      <section className="billing__container">
        <div className="billing__stats">
          <p className="count__top">Aquired Volume</p>
          <p className="count">1000</p>
          <p className="count__bottom">
            <span className="span__count--positive">2%</span> from last week
          </p>
        </div>
        <div className="billing__stats">
          <p className="count__top">Plan Consumption</p>
          <p className="count">495</p>
          <p className="count__bottom">
            <span className="span__count--positive">5%</span> from last week
          </p>
        </div>{" "}
        <div className="billing__stats">
          <p className="count__top">LandLine Consumption</p>
          <p className="count">0</p>
          <p className="count__bottom">
            <span className="span__count--positive">4%</span> from last week
          </p>
        </div>{" "}
        <div className="billing__stats">
          <p className="count__top">Available Credits</p>
          <p className="count">505</p>
          <p className="count__bottom">
            <span className="span__count--negative">7%</span> from last week
          </p>
        </div>{" "}
        <div className="billing__stats">
          <p className="count__top">Scheduled Messages</p>
          <p className="count">330</p>
          <p className="count__bottom">
            <span className="span__count--positive">4%</span> from last week
          </p>
        </div>{" "}
        <div className="billing__stats">
          <p className="count__top">Real Credit</p>
          <p className="count">275</p>
          <p className="count__bottom">
            <span className="span__count--negative">3%</span> from last week
          </p>
        </div>
      </section>
    );
  }
}
export default withNamespaces("common")(Billing);
