import React, { Component } from "react";
import { withNamespaces } from "react-i18next";

class Pricing extends Component {
  render() {
    const { handleAddCredits } = this.props;

    return (
      <article className="pricing">
        <section className="pricing__table">
          <div class="pricing__slot">
            <div className="price-head current">
              <h4 className="pricing__subtitle">ACTIVE</h4>
              <h2 className="pricing__title">15 NOV 2018</h2>
            </div>
            <div className="price__content">
              <ul>
                <li>
                  <span className="pricing__span">
                    {this.props.t("pricing.package")}10 SMS
                  </span>{" "}
                  3.6 cent
                </li>
                <li>
                  <span className="pricing__span">
                    {this.props.t("pricing.aquiredVolume")}{" "}
                  </span>{" "}
                  10
                </li>
                <li>
                  <span className="pricing__span">
                    {" "}
                    {this.props.t("pricing.unitPrice")}{" "}
                  </span>
                  0.00€
                </li>
              </ul>
            </div>
            <div className="price-button">
              <button className="button button__pricing current">
                Upgrade Package
              </button>
            </div>
          </div>
          <div class="pricing__slot">
            <div className="price-head">
              <h4 className="pricing__subtitle">44,28€</h4>
              <h2 className="pricing__title">1.000 SMS / MB</h2>
            </div>
            <div className="price__content">
              <ul>
                <li>
                  <span className="pricing__span">Pacote 1.000 SMS</span> 3.6
                  cent
                </li>
                <li>
                  <span className="pricing__span">
                    {this.props.t("pricing.cardEntity")}
                  </span>{" "}
                  11989
                </li>
                <li>
                  <span className="pricing__span">
                    {this.props.t("pricing.cardEntity")}
                  </span>{" "}
                  012 361 563{" "}
                </li>
              </ul>
            </div>
            <div className="price-button">
              <button
                className="button button__pricing"
                onClick={() => handleAddCredits(1000)}
              >
                Upgrade Package
              </button>
            </div>
          </div>

          <div class="pricing__slot">
            <div className="price-head">
              <h4 className="pricing__subtitle">209,10,60€</h4>
              <h2 className="pricing__title">5.000 SMS / MB</h2>
            </div>
            <div className="price__content">
              <ul>
                <li>
                  <span className="pricing__span">Pacote 5.000 SMS</span> 3.4
                  cent
                </li>
                <li>
                  <span className="pricing__span">
                    {this.props.t("pricing.cardEntity")}
                  </span>{" "}
                  11989
                </li>
                <li>
                  <span className="pricing__span">
                    {this.props.t("pricing.cardReferenceNumber")}
                  </span>{" "}
                  012 361 563{" "}
                </li>
              </ul>
            </div>
            <div className="price-button">
              <button
                className="button button__pricing"
                onClick={() => handleAddCredits(5000)}
              >
                Upgrade Package
              </button>
            </div>
          </div>
          <div class="pricing__slot">
            <div className="price-head">
              <h4 className="pricing__subtitle">396,60€</h4>
              <h2 className="pricing__title">10.000 SMS / MB</h2>
            </div>
            <div className="price__content">
              <ul>
                <li>
                  <span className="pricing__span">Pacote 10.000 SMS</span> 3.2
                  cent
                </li>
                <li>
                  <span className="pricing__span">
                    {this.props.t("pricing.cardEntity")}
                  </span>{" "}
                  11989
                </li>
                <li>
                  <span className="pricing__span">
                    {this.props.t("pricing.cardReferenceNumber")}
                  </span>{" "}
                  012 361 563{" "}
                </li>
              </ul>
            </div>
            <div className="price-button">
              <button
                className="button button__pricing"
                onClick={() => handleAddCredits(10000)}
              >
                Upgrade Package
              </button>
            </div>
          </div>
          <div class="pricing__slot">
            <div className="price-head">
              <h4 className="pricing__subtitle">922,50€</h4>
              <h2 className="pricing__title">25.000 SMS / MB</h2>
            </div>
            <div className="price__content">
              <ul>
                <li>
                  <span className="pricing__span">Pacote 25.000 SMS</span> 3.0
                  cent
                </li>
                <li>
                  <span className="pricing__span">
                    {" "}
                    {this.props.t("pricing.cardEntity")}
                  </span>{" "}
                  11989
                </li>
                <li>
                  <span className="pricing__span">
                    {this.props.t("pricing.cardReferenceNumber")}{" "}
                  </span>{" "}
                  012 361 563{" "}
                </li>
              </ul>
            </div>
            <div className="price-button">
              <button
                className="button button__pricing"
                onClick={() => handleAddCredits(25000)}
              >
                Upgrade Package
              </button>
            </div>
          </div>
          <div class="pricing__slot">
            <div className="price-head">
              <h4 className="pricing__subtitle">1783,50€</h4>
              <h2 className="pricing__title">50.000 SMS / MB</h2>
            </div>
            <div className="price__content">
              <ul>
                <li>
                  <span className="pricing__span">Pacote 50.000 SMS</span> 2.9
                  cent
                </li>
                <li>
                  <span className="pricing__span">
                    {this.props.t("pricing.cardEntity")}
                  </span>{" "}
                  11989
                </li>
                <li>
                  <span className="pricing__span">
                    {this.props.t("pricing.cardReferenceNumber")}
                  </span>{" "}
                  012 361 563{" "}
                </li>
              </ul>
            </div>
            <div className="price-button">
              <button
                className="button button__pricing"
                onClick={() => handleAddCredits(50000)}
              >
                Upgrade Package
              </button>
            </div>
          </div>
        </section>
      </article>
    );
  }
}
export default withNamespaces("common")(Pricing);
