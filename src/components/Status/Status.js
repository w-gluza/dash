import React, { Component } from "react";
import { withNamespaces } from "react-i18next";

class Status extends Component {
  render() {
    const MessageList = [
      {
        smsID: "2196608",
        PhoneNumber: "916155757",
        CreationTimeStamp: "2013-05-13 16:00:46",
        ProcessTimeStamp: "2013-05-13 16:01:00",
        DeliveryStatus: "0"
      },
      {
        smsID: "2196775",
        PhoneNumber: "916155757",
        CreationTimeStamp: "2013-05-13 16:13:42",
        ProcessTimeStamp: "2013-05-13 16:13:52",
        DeliveryStatus: "1"
      },
      {
        smsID: "2196776",
        PhoneNumber: "916155757",
        CreationTimeStamp: "2013-05-13 16:13:42",
        ProcessTimeStamp: "2013-05-13 16:13:55",
        DeliveryStatus: "0"
      },
      {
        smsID: "2198954",
        PhoneNumber: "967146050",
        CreationTimeStamp: "2013-05-13 16:59:00",
        ProcessTimeStamp: "2013-05-13 16:59:10",
        DeliveryStatus: "1"
      },
      {
        smsID: "2198955",
        PhoneNumber: "967146050",
        CreationTimeStamp: "2013-05-13 16:59:00",
        ProcessTimeStamp: "2013-05-13 16:59:12",
        DeliveryStatus: "1"
      },
      {
        smsID: "2198956",
        PhoneNumber: "916155757",
        CreationTimeStamp: "2013-05-13 16:59:00",
        ProcessTimeStamp: "2013-05-13 16:59:11",
        DeliveryStatus: "1"
      }
    ];
    return (
      <div className="test">
        <span>
          {MessageList.map((sms, i) => {
            return <div key={sms.smsID}>{sms.smsID} </div>;
          })}
        </span>
      </div>
    );
  }
}
export default withNamespaces("common")(Status);
