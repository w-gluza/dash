import React, { Component } from "react";
import { withNamespaces } from "react-i18next";
import LogoAnimation from "../LogoAnimation/LogoAnimation";

class Aside extends Component {
  render() {
    return (
      <aside className="aside__grid">
        <div className="aside__title">
          <h1 className="aside__heading">Welcome back!</h1>
          <h2 className="aside__subheading">
            Log in to access your profile or signup to create a new account
          </h2>
        </div>
        <div className="asideLogo__wraper">
          <LogoAnimation />
        </div>

        <div className="aside__links">
          <p>EZ4U</p> / <p>info@ez4uteam.com</p> / <p>+351 220 731 391</p>
        </div>
      </aside>
    );
  }
}
export default withNamespaces("common")(Aside);
