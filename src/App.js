import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { withNamespaces } from "react-i18next";
import "./main.scss";

import TopNav from "./components/TopNav/TopNav";
import SideNav from "./components/SideNav/SideNav";
// import Test from "./components/Test/test";

import Campaigns from "./containers/Campaigns";
import QuickSMS from "./containers/QuickSMS";
import Statistics from "./containers/Statistics";
import Reports from "./containers/Reports";
import Billings from "./containers/Billings";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="dashboard__grid">
          <TopNav />
          <SideNav />
          {/* <Test /> */}
          <main className="main">
            <Route exact path="/" component={Campaigns} />
            <Route exact path="/quicksms" component={QuickSMS} />
            <Route exact path="/statistics" component={Statistics} />
            <Route exact path="/reports" component={Reports} />
            <Route exact path="/billings" component={Billings} />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}
export default withNamespaces("common")(App);
