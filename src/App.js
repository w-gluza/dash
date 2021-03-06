import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { withNamespaces } from "react-i18next";
import "react-toastify/dist/ReactToastify.css";
import "./main.scss";
import { ToastContainer } from "react-toastify";

import Register from "./containers/Register";
import TopNav from "./components/TopNav/TopNav";
import SideNav from "./components/SideNav/SideNav";

import Campaigns from "./containers/Campaigns";
import QuickSMS from "./containers/QuickSMS";
import Statistics from "./containers/Statistics";
import Reports from "./containers/Reports";
import Billings from "./containers/Billings";

import { subscribe, unsubscribe } from "./localStorage";
import MobileNav from "./components/MobileNav/MobileNav";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginOption: true,
      signupOption: false
    };
    this.loginToggle = this.loginToggle.bind(this);
    this.signupToggle = this.signupToggle.bind(this);
  }

  componentDidMount() {
    subscribe(this);
  }

  componentWillUnmount() {
    unsubscribe(this);
  }

  loginToggle() {
    this.setState({
      loginOption: true,
      signupOption: false
    });
  }
  signupToggle() {
    this.setState({
      loginOption: false,
      signupOption: true
    });
  }

  render() {
    return (
      <>
        <BrowserRouter basename="/dash">
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Register
                  loginOption={this.state.loginOption}
                  signupOption={this.state.signupOption}
                  loginToggle={this.loginToggle}
                  signupToggle={this.signupToggle}
                />
              )}
            />
            <Route
              path="/"
              render={() => (
                <>
                  <div className="dashboard__grid">
                    <TopNav />
                    <SideNav />
                    <main className="main">
                      <Route exact path="/campaigns" component={Campaigns} />
                      <Route exact path="/quicksms" component={QuickSMS} />
                      <Route exact path="/statistics" component={Statistics} />
                      <Route exact path="/reports" component={Reports} />
                      <Route exact path="/billings" component={Billings} />
                    </main>
                  </div>
                  <MobileNav />
                </>
              )}
            />
          </Switch>
        </BrowserRouter>
        <ToastContainer />
      </>
    );
  }
}
export default withNamespaces("common")(App);
