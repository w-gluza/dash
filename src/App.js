import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { withNamespaces } from "react-i18next";
import "./main.scss";

import TopNav from "./components/TopNav/TopNav";
import SideNav from "./components/SideNav/SideNav";
import Chart from "./components/Chart/Chart";

import Status from "./components/Status/Status";
import Report from "./components/Report/Report";

const account = "WiolaTest";
const licensekey = "adf9050fcded6680e6ed16d7";
const something = "getAvailableCredits.php?";
const URL = `https://api.ez4uteam.com/ez4usms/API/${something}account=${account}&licensekey=${licensekey}`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      AvailableCreditsInfo: []
    };
  }

  componentDidMount() {
    fetch(URL)
      .then(response => response.json())
      .then(data =>
        this.setState({ AvailableCreditsInfo: data.AvailableCreditsInfo })
      );
  }

  render() {
    const { AvailableCreditsInfo } = this.state;

    return (
      <BrowserRouter>
        <div>
          <TopNav />
          <Route exact path="/" component={Status} />
          <Route exact path="/statistics" component={Chart} />
          <Route exact path="/reports" component={Report} />

          <SideNav />

          <ul className="test">
            {AvailableCreditsInfo.map(x => (
              <li key={x.Acquired}>
                <a href={x.Scheduled}>{x.Consumed}</a>
              </li>
            ))}
          </ul>
        </div>
      </BrowserRouter>
    );
  }
}
export default withNamespaces("common")(App);
