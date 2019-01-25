import React, { Component } from "react";
import { withNamespaces } from "react-i18next";
// import LogIn from "../components/Authentication/LogIn";
import SignUp from "../components/Authentication/SignUp";

class Register extends Component {
  render() {
    return (
      <section className="register__container">
        <section className="register__wraper">
          <SignUp />

          {/* <LogIn /> */}
        </section>
      </section>
    );
  }
}
export default withNamespaces("common")(Register);
