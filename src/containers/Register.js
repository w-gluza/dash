import React, { Component } from "react";
import { withNamespaces } from "react-i18next";
import LogIn from "../components/Authentication/LogIn";
import SignUp from "../components/Authentication/SignUp";
import Aside from "../components/Authentication/Aside";

class Register extends Component {
  render() {
    return (
      <main className="registration">
        <aside className="registration__aside">
          <Aside />
        </aside>
        <section className="registration__form__container">
          <section className="registration__form">
            <div className="pageSwitcher__container">
              <div className="pageSwitcher">
                <button
                  className={
                    this.props.loginOption
                      ? "pageSwitcher__item pageSwitcher__item--active"
                      : "pageSwitcher__item"
                  }
                  onClick={this.props.loginToggle}
                >
                  Log In
                </button>
                <button
                  className={
                    this.props.signupOption
                      ? "pageSwitcher__item pageSwitcher__item--active"
                      : "pageSwitcher__item"
                  }
                  onClick={this.props.signupToggle}
                >
                  Sign Up
                </button>
              </div>
            </div>
            <div className="registrationForm__title">
              <span>
                <button
                  className={
                    this.props.loginOption
                      ? "registrationForm__title__link registrationForm__title__link--Active"
                      : "registrationForm__title__link"
                  }
                  onClick={this.props.loginToggle}
                >
                  Log In
                </button>
                <span className="registration__form--span">or</span>
              </span>
              <button
                className={
                  this.props.signupOption
                    ? "registrationForm__title__link registrationForm__title__link--Active"
                    : "registrationForm__title__link"
                }
                onClick={this.props.signupToggle}
              >
                Sign Up
              </button>
            </div>
            {this.props.loginOption ? (
              <LogIn {...this.props} />
            ) : (
              <SignUp {...this.props} />
            )}
          </section>
        </section>
      </main>
    );
  }
}
export default withNamespaces("common")(Register);
