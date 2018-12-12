import React, { Component } from "react";
import { withNamespaces } from "react-i18next";

class Pricing extends Component {
  render() {
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
                  <span className="pricing__span">Pacote 10 SMS</span> 3.6 cent
                </li>
                <li>
                  <span className="pricing__span">Acquired Volume </span> 10
                </li>
                <li>
                  <span className="pricing__span"> Unit Price </span>0.00€
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
                  <span className="pricing__span">Entidade</span> 11989
                </li>
                <li>
                  <span className="pricing__span">Referência </span> 012 361 563{" "}
                </li>
              </ul>
            </div>
            <div className="price-button">
              <button className="button button__pricing">
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
                  <span className="pricing__span">Entidade</span> 11989
                </li>
                <li>
                  <span className="pricing__span">Referência </span> 012 361 563{" "}
                </li>
              </ul>
            </div>
            <div className="price-button">
              <button className="button button__pricing">
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
                  <span className="pricing__span">Entidade</span> 11989
                </li>
                <li>
                  <span className="pricing__span">Referência </span> 012 361 563{" "}
                </li>
              </ul>
            </div>
            <div className="price-button">
              <button className="button button__pricing">
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
                  <span className="pricing__span">Entidade</span> 11989
                </li>
                <li>
                  <span className="pricing__span">Referência </span> 012 361 563{" "}
                </li>
              </ul>
            </div>
            <div className="price-button">
              <button className="button button__pricing">
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
                  <span className="pricing__span">Entidade</span> 11989
                </li>
                <li>
                  <span className="pricing__span">Referência </span> 012 361 563{" "}
                </li>
              </ul>
            </div>
            <div className="price-button">
              <button className="button button__pricing">
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
