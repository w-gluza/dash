import React, { Component } from "react";
import { withNamespaces } from "react-i18next";
import User from "../User/User";

const request = "getAvailableCredits.php?";
const account = "WiolaTest";
const licensekey = "adf9050fcded6680e6ed16d7";
const URL = `https://api.ez4uteam.com/ez4usms/API/${request}account=${account}&licensekey=${licensekey}`;

class TopNav extends Component {
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
    const { i18n } = this.props;
    const { AvailableCreditsInfo } = this.state;

    return (
      <div className="topnav">
        <div>
          <button onClick={() => i18n.changeLanguage("en")}>en</button>
          <button onClick={() => i18n.changeLanguage("pt")}>pt</button>
          <button onClick={() => i18n.changeLanguage("es")}>es</button>
        </div>
        <div>
          Available Credit:
          <ul className="test">
            {AvailableCreditsInfo.map(x => (
              <li key={x.Acquired}>
                <a href={x.Scheduled}>{x.AvailableCredits}</a>
              </li>
            ))}
          </ul>
        </div>
        <User />
        <div />
      </div>
    );
  }
}
export default withNamespaces("common")(TopNav);
