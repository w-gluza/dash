import React, { Component } from "react";
import "./main.scss";

import TopNav from "./components/TopNav/TopNav";
import SideNav from "./components/SideNav/SideNav";
import Chart from "./components/Chart/Chart";

import Status from "./components/Status/Status";

// const API = "https://hn.algolia.com/api/v1/search?query=";
// const API =
//   "https://api.ez4uteam.com/ez4usms/API/getAvailableCredits.php?account=WiolaTest&licensekey=adf9050fcded6680e6ed16d7";
// const DEFAULT_QUERY = "redux";  <--- do I need it ??

const myHeaders = {
  "Content-Type": "application/json; charset=utf-8",
  licensekey: "adf9050fcded6680e6ed16d7",
  "cache-control": "no-cache"
  // account: WiolaTest
};
class App extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   hits: []
    // };

    this.state = {
      AvailableCreditsInfo: []
    };
  }

  // componentDidMount() {
  //   fetch(API)
  //     .then(response => response.json())
  //     .then(data => this.setState({ hits: data.hits }));
  //   // .then(data => this.setState({ AvailableCreditsInfo: data.AvailableCreditsInfo }));
  // }

  componentDidMount() {
    fetch(
      "https://api.ez4uteam.com/ez4usms/API/getAvailableCredits.php?account=WiolaTest&licensekey=adf9050fcded6680e6ed16d7",
      {
        method: "get",
        headers: myHeaders
      }
    )
      .then(res => res.json())
      .then(data =>
        this.setState({ AvailableCreditsInfo: data.AvailableCreditsInfo })
      );
  }

  render() {
    // const { hits } = this.state;

    const { AvailableCreditsInfo } = this.state;

    return (
      <div>
        <TopNav />
        <SideNav />
        <Chart />

        <Status />

        {/* <ul className="test">
          {hits.map(hit => (
            <li key={hit.objectID}>
              <a href={hit.url}>{hit.title}</a>
            </li>
          ))}
        </ul> */}

        <ul className="test">
          {AvailableCreditsInfo.map(x => (
            <li key={x.Acquired}>
              <a href={x.Scheduled}>{x.Consumed}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default App;
