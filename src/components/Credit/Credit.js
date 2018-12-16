import React, { Component } from "react";
import { withNamespaces } from "react-i18next";

// const request = "getAvailableCredits.php?";
// const account = "WiolaTest";
// const licensekey = "adf9050fcded6680e6ed16d7";
// const URL = `https://api.ez4uteam.com/ez4usms/API/${request}account=${account}&licensekey=${licensekey}`;

class Credit extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     AvailableCreditsInfo: []
  //   };
  // }

  // componentDidMount() {
  //   fetch(URL)
  //     .then(response => response.json())
  //     .then(data =>
  //       this.setState({ AvailableCreditsInfo: data.AvailableCreditsInfo })
  //     );
  // }

  render() {
    // const { AvailableCreditsInfo } = this.state;

    return (
      <div>
        {/* <div>
          <ul className="test">
            {AvailableCreditsInfo.map(x => (
              <div>
                <p>
                  Total Aquired Volume:
                  <span>{x.Acquired}</span>
                </p>
                <p>
                  Total Plan Consumtion:
                  <span>{x.Consumed}</span>
                </p>
                <p>
                  Total Landline Consumtion:
                  <span>{x.ConsumedLandLine}</span>
                </p>
                <p>
                  Available Credits (excluding scheduled messages):
                  <span>{x.AvailableCreditsWithoutScheduled}</span>
                </p>
                <p>
                  Scheduled Messages:
                  <span>{x.Scheduled}</span>
                </p>
                <p>
                  Available Credit:
                  <span>{x.AvailableCredits}</span>
                </p>
              </div>
            ))}
          </ul>
        </div> */}
      </div>
    );
  }
}
export default withNamespaces("common")(Credit);
