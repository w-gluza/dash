import React, { Component } from "react";
import { withNamespaces } from "react-i18next";
import User from "../User/User";
import AvailableCreditBar from "../Bars/AvailableCreditBar";

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
        <AvailableCreditBar />
        <User />
        <nav className="nav__lang">
          <button
            className="nav__lang__item"
            onClick={() => i18n.changeLanguage("en")}
          >
            en /
          </button>
          <button
            className="nav__lang__item"
            onClick={() => i18n.changeLanguage("pt")}
          >
            pt /
          </button>
          <button
            className="nav__lang__item"
            onClick={() => i18n.changeLanguage("es")}
          >
            es
          </button>
        </nav>
      </div>
    );
  }
}
export default withNamespaces("common")(TopNav);
