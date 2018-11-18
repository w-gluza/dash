import React, { Component } from "react";
import "./main.scss";

import TopNav from "./components/TopNav/TopNav";
import SideNav from "./components/SideNav/SideNav";
import Chart from "./components/Chart/Chart";

import Status from "./components/Status/Status";

class App extends Component {
  render() {
    return (
      <div>
        <TopNav />
        <SideNav />
        <Chart />

        <Status />
      </div>
    );
  }
}
export default App;
