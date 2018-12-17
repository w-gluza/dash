import React, { Component } from "react";
import { withNamespaces } from "react-i18next";
import json from "../../assets/json/credit";

class Billing extends Component {
  state = {
    AvailableCreditsInfo: json.AvailableCreditsInfo
  };

  render() {
    const { AvailableCreditsInfo } = this.state;

    return (
      <section className="billing__container">
        {AvailableCreditsInfo.map(userCredit => {
          const AvailableCredits = userCredit.Acquired - userCredit.Consumed;
          const AvailableCreditsWithoutScheduled =
            AvailableCredits - userCredit.Scheduled;
          return (
            <>
              <div className="billing__stats">
                <p className="count__top">Aquired Volume</p>
                <p className="count">{userCredit.Acquired}</p>
                <p className="count__bottom">
                  <span className="span__count--positive">2%</span> from last
                  week
                </p>
              </div>
              <div className="billing__stats">
                <p className="count__top">Plan Consumption</p>
                <p className="count">{userCredit.Consumed}</p>
                <p className="count__bottom">
                  <span className="span__count--positive">5%</span> from last
                  week
                </p>
              </div>{" "}
              <div className="billing__stats">
                <p className="count__top">LandLine Consumption</p>
                <p className="count">{userCredit.ConsumedLandLine}</p>
                <p className="count__bottom">
                  <span className="span__count--positive">4%</span> from last
                  week
                </p>
              </div>{" "}
              <div className="billing__stats">
                <p className="count__top">Available Credits</p>
                <p className="count">{AvailableCredits}</p>
                <p className="count__bottom">
                  <span className="span__count--negative">7%</span> from last
                  week
                </p>
              </div>{" "}
              <div className="billing__stats">
                <p className="count__top">Scheduled Messages</p>
                <p className="count">{userCredit.Scheduled}</p>
                <p className="count__bottom">
                  <span className="span__count--positive">4%</span> from last
                  week
                </p>
              </div>{" "}
              <div className="billing__stats">
                <p className="count__top">Real Credit</p>
                <p className="count">{AvailableCreditsWithoutScheduled}</p>
                <p className="count__bottom">
                  <span className="span__count--negative">3%</span> from last
                  week
                </p>
              </div>
            </>
          );
        })}
      </section>
    );
  }
}
export default withNamespaces("common")(Billing);
