import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import { withNamespaces } from "react-i18next";
import "react-toastify/dist/ReactToastify.css";
import "./main.scss";
import { ToastContainer } from "react-toastify";

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
  componentDidMount() {
    subscribe(this);
  }

  componentWillUnmount() {
    unsubscribe(this);
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Redirect from="/dashboard" to="/billings" />
            <Route
              exact
              path="/login"
              render={() => (
                <Link to="/">
                  <button>login</button>
                </Link>
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
                      <Route exact path="/" component={Campaigns} />
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
