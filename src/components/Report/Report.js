import React, { Component } from "react";
import { withNamespaces } from "react-i18next";

const request = "getSMSList.php?";
const account = "WiolaTest";
const licensekey = "adf9050fcded6680e6ed16d7";
const startDate = "2018-11-05";
const endDate = "2018-11-25";
const smsID = "0";
const URL = `https://api.ez4uteam.com/ez4usms/API/${request}account=${account}&licensekey=${licensekey}&startDate=${startDate}&endDate=${endDate}&fromSMSID=${smsID}`;

class Report extends Component {
  constructor(props) {
    super(props);

    this.state = {
      MessageList: []
    };
  }

  componentDidMount() {
    fetch(URL)
      .then(response => response.json())
      .then(data => this.setState({ MessageList: data.MessageList }));
  }

  render() {
    const { MessageList } = this.state;
    return (
      <div className="report__container">
        <div className="card__header">Reports -> Last Week</div>
        <div className="card__body">
          <div>
            {MessageList.map(x => (
              <li>
                {/* <a href={x.Scheduled}>{x.AvailableCredits}</a> */}
                <td>{x.PhoneNumber}</td>
              </li>
            ))}
          </div>

          <table className="test__grid">
            {/* <tr className="cell__grid"> */}
            {/* <th> Number</th>
            <td>505050505</td> */}

            {/* </tr> */}
            {/* <tr className="cell__grid">
              <th>Operator</th>
              <td>Portugal</td>
            </tr>
            <tr className="cell__grid">
              <th>Nr sms</th>
              <td>1</td>
            </tr> */}
            {/* <tr className="cell__grid">
              <th>message</th>
              <td>Test</td>
            </tr>
            <tr className="cell__grid">
              <th>sender</th>
              <td>Someone</td>
            </tr>
            <tr className="cell__grid">
              <th>user</th>
              <td>WiolaTest</td>
            </tr>
            <tr className="cell__grid">
              <th>Scheduled at</th>
              <td>{x.ProcessTimeStamp}</td>
            </tr> */}
            {/* <tr className="cell__grid">
              <th>delivery timestamp</th>
              <td>2018-11-18 23:27:41</td>
            </tr>
            <tr className="cell__grid">
              <th>status</th>
              <td>Test</td>
            </tr> */}
          </table>
        </div>
      </div>
    );
  }
}
export default withNamespaces("common")(Report);
