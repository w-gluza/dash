import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { withNamespaces } from "react-i18next";
import LogIn from "../components/Authentication/LogIn";
import SignUp from "../components/Authentication/SignUp";

class Register extends Component {
  render() {
    return (
      <Router>
        <main className="registration">
          <aside className="registration__aside" />
          <section className="registration__form">
            <div className="pageSwitcher__container">
              <div className="pageSwitcher">
                <NavLink
                  exact
                  to="/"
                  activeClassName="pageSwitcher__item--active"
                  className="pageSwitcher__item"
                >
                  Log In
                </NavLink>
                <NavLink
                  exact
                  to="/sign-up"
                  activeClassName="pageSwitcher__item--active"
                  className="pageSwitcher__item"
                >
                  Sign Up
                </NavLink>
              </div>
            </div>

            <div className="registrationForm__title">
              <NavLink
                exact
                to="/"
                activeClassName="registrationForm__title__link--Active"
                className="registrationForm__title__link"
              >
                Log In
              </NavLink>
              <span className="registration__form--span">or</span>
              <NavLink
                exact
                to="/sign-up"
                activeClassName="registrationForm__title__link--Active"
                className="registrationForm__title__link"
              >
                Sign Up
              </NavLink>
            </div>

            <Route exact path="/sign-up" component={SignUp} />
            <Route exact path="/" component={LogIn} />
          </section>
        </main>
      </Router>
    );
  }
}
export default withNamespaces("common")(Register);
