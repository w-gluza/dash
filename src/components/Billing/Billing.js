import React, { Component } from "react";
import { withNamespaces } from "react-i18next";

class Billing extends Component {
  render() {
    const { AvailableCreditsInfo } = this.props;

    return (
      <section className="billing__container">
        {AvailableCreditsInfo.map((userCredit, index) => {
          const AvailableCredits = userCredit.Acquired - userCredit.Consumed;
          const AvailableCreditsWithoutScheduled =
            AvailableCredits - userCredit.Scheduled;
          return (
            <React.Fragment key={index}>
              <div className="billing__stats">
                <p className="count__top">
                  {this.props.t("billings.aquiredVolume")}
                </p>
                <p className="count">{userCredit.Acquired}</p>
                <p className="count__bottom">
                  <span className="span__count--positive">2%</span>
                  {this.props.t("billings.fromLastWeek")}
                </p>
              </div>
              <div className="billing__stats">
                <p className="count__top">
                  {this.props.t("billings.planConsumption")}
                </p>
                <p className="count">{userCredit.Consumed}</p>
                <p className="count__bottom">
                  <span className="span__count--positive">5%</span>
                  {this.props.t("billings.fromLastWeek")}
                </p>
              </div>
              <div className="billing__stats">
                <p className="count__top">
                  {this.props.t("billings.landLineConsumption")}
                </p>
                <p className="count">{userCredit.ConsumedLandLine}</p>
                <p className="count__bottom">
                  <span className="span__count--positive">4%</span>
                  {this.props.t("billings.fromLastWeek")}
                </p>
              </div>
              <div className="billing__stats">
                <p className="count__top">
                  {this.props.t("billings.availableCredits")}
                </p>
                <p className="count">{AvailableCredits}</p>
                <p className="count__bottom">
                  <span className="span__count--negative">7%</span>
                  {this.props.t("billings.fromLastWeek")}
                </p>
              </div>
              <div className="billing__stats">
                <p className="count__top">
                  {this.props.t("billings.scheduledMessages")}
                </p>
                <p className="count">{userCredit.Scheduled}</p>
                <p className="count__bottom">
                  <span className="span__count--positive">4%</span>
                  {this.props.t("billings.fromLastWeek")}
                </p>
              </div>
              <div className="billing__stats">
                <p className="count__top">
                  {this.props.t("billings.realCredit")}
                </p>
                <p className="count">{AvailableCreditsWithoutScheduled}</p>
                <p className="count__bottom">
                  <span className="span__count--negative">3%</span>
                  {this.props.t("billings.fromLastWeek")}
                </p>
              </div>
            </React.Fragment>
          );
        })}
      </section>
    );
  }
}
export default withNamespaces("common")(Billing);
