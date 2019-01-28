import React, { Component } from "react";
import { withNamespaces } from "react-i18next";
import LogIn from "../components/Authentication/LogIn";
import SignUp from "../components/Authentication/SignUp";
import Aside from "../components/Authentication/Aside";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true,
      signup: false
    };
    this.loginToggle = this.loginToggle.bind(this);
    this.signupToggle = this.signupToggle.bind(this);
  }

  loginToggle() {
    this.setState({
      login: true,
      signup: false
    });
  }
  signupToggle() {
    this.setState({
      login: false,
      signup: true
    });
  }

  render() {
    return (
      <main className="registration">
        <aside className="registration__aside">
          <Aside />
        </aside>
        <section className="registration__form">
          <div className="pageSwitcher__container">
            <div className="pageSwitcher">
              <button
                className={
                  this.state.login
                    ? "pageSwitcher__item pageSwitcher__item--active"
                    : "pageSwitcher__item"
                }
                onClick={this.loginToggle}
              >
                Log In
              </button>
              <button
                className={
                  this.state.signup
                    ? "pageSwitcher__item pageSwitcher__item--active"
                    : "pageSwitcher__item"
                }
                onClick={this.signupToggle}
              >
                Sign Up
              </button>
            </div>
          </div>
          <div className="registrationForm__title">
            <span>
              <button
                className={
                  this.state.login
                    ? "registrationForm__title__link registrationForm__title__link--Active"
                    : "registrationForm__title__link"
                }
                onClick={this.loginToggle}
              >
                Log In
              </button>
              <span className="registration__form--span">or</span>
            </span>
            <button
              className={
                this.state.signup
                  ? "registrationForm__title__link registrationForm__title__link--Active"
                  : "registrationForm__title__link"
              }
              onClick={this.signupToggle}
            >
              Sign Up
            </button>
          </div>
          {this.state.login ? <LogIn /> : <SignUp />}
        </section>
      </main>
    );
  }
}
export default withNamespaces("common")(Register);
