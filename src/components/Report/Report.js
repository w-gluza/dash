import React, { Component } from "react";
import { withNamespaces } from "react-i18next";
import json from "../../assets/json/status.json";

class Report extends Component {

  
  state = {
    MessageList: json.MessageList,
  };

  render() {
      
    const { MessageList } = this.state;

    return (
      <>
        <div className="card__header">Reports -> Last Week</div>
        <div className="card__body">
          <div>
            {MessageList.map(deliveryReport => (
              <li className="delivery__box">
                <td>{deliveryReport.PhoneNumber}</td>
                <td>{deliveryReport.CreationTimeStamp}</td>
                <td>{deliveryReport.ProcessTimeStamp}</td>
                <td className={`deliveryreport ${getColor(deliveryReport.DeliveryStatus)}`}>{deliveryReport.DeliveryStatus}</td>

              </li>
            ))}
          </div>
        </div>
        </>
    );
  }
}

const getColor = DeliveryStatus => {
  if (DeliveryStatus === "0") {
    return "deliveryreport__notprocessed";
  } else if (DeliveryStatus === "1") {
    return "deliveryreport__delivered";
  } else if (DeliveryStatus === "2") {
    return "deliveryreport__pending";
  } else if (DeliveryStatus === "3") {
    return "deliveryreport__notdelivered";
  } else {
    return "deliveryreport__expired";
  }
};
export default withNamespaces("common")(Report);
