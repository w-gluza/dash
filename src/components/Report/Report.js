import React, { Component } from "react";
import { withNamespaces } from "react-i18next";

class Report extends Component {
  render() {
    return (
      <div className="report__container">
        <div className="card__header">Reports -> Last Week</div>
        <div className="card__body">
          <table className="test__grid">
            <tr className="cell__grid">
              <th> Number</th>
              <td>505050505</td>
            </tr>
            <tr className="cell__grid">
              <th>Operator</th>
              <td>Portugal</td>
            </tr>
            <tr className="cell__grid">
              <th>Nr sms</th>
              <td>1</td>
            </tr>
            <tr className="cell__grid">
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
              <td>2018-11-18 21:27:41</td>
            </tr>
            <tr className="cell__grid">
              <th>delivery timestamp</th>
              <td>2018-11-18 23:27:41</td>
            </tr>
            <tr className="cell__grid">
              <th>status</th>
              <td>Test</td>
            </tr>
          </table>

          {/* <table className="table">
            <thead className="table__head grid">
              <tr>
                <th>Number</th>
                <th>Operator</th>
                <th>Nr sms</th>
                <th>message</th>
                <th>sender</th>
                <th>user</th>
                <th>Scheduled at</th>
                <th>delivery timestamp</th>
                <th>status</th>
              </tr>
            </thead>
            <tbody className="grid">
              <tr>
                <td>5053002033</td>
                <td>Portugal</td>
                <td>1</td>
                <td>Test</td>
                <td>Girls</td>
                <td>WiolaTest</td>
                <td>2018-11-18 21:27:41</td>
                <td>2018-11-18 21:28:02</td>
                <td>Delivered</td>
              </tr>
            </tbody>
          </table> */}
        </div>
      </div>
    );
  }
}
export default withNamespaces("common")(Report);
