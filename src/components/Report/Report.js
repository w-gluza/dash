import React, { Component } from "react";
import { withNamespaces } from "react-i18next";
import json from "../../assets/json/status.json";
import * as Datetime from "react-datetime";
import moment from "moment";

class Report extends Component {
  state = {
    MessageList: [...json.MessageList].sort((a, b) => {
      if (a.ProcessTimeStamp < b.ProcessTimeStamp) {
        return 1;
      } else if (a.ProcessTimeStamp > b.ProcessTimeStamp) {
        return -1;
      } else {
        return 0;
      }
    }),
    filter: "all",
    fromDate: moment().subtract(7, "days"),
    toDate: moment()
  };

  handleSetFilter = filter => {
    this.setState({ filter });
  };

  handleChangeFilterDate = (name, value) => {
    this.setState(state => {
      let { toDate, fromDate } = state;
      if (name === "toDate") {
        toDate = value;
        if (value.isBefore(state.fromDate)) {
          fromDate = value;
        }
      }

      if (name === "fromDate") {
        fromDate = value;
        if (value.isAfter(state.toDate)) {
          toDate = value;
        }
      }

      return { fromDate, toDate };
    });
  };

  isActiveFilter = filter => this.state.filter === filter;

  getFiltered = () => {
    return this.state.MessageList.filter(deliveryReport => {
      const processMoment = moment(deliveryReport.ProcessTimeStamp);
      return (
        (this.state.filter === "all" ||
          deliveryReport.DeliveryStatus === this.state.filter) &&
        processMoment.isAfter(this.state.fromDate) &&
        processMoment.isBefore(this.state.toDate)
      );
    }).slice(0, 20);
  };

  render() {
    const { MessageList } = this.state;

    return (
      <section className="report__container">
        <div className="card__header">Reports -> Last Week</div>
        <div>
          Filter by:
          <button
            onClick={() => {
              this.handleSetFilter("all");
            }}
            className={`filterbutton ${
              this.isActiveFilter("all") ? "filterbutton__active" : ""
            }`}
          >
            All
          </button>
          <button
            onClick={() => {
              this.handleSetFilter("0");
            }}
            className={`filterbutton ${
              this.isActiveFilter("0") ? "filterbutton__active" : ""
            }`}
          >
            Not processed
          </button>
          <button
            onClick={() => {
              this.handleSetFilter("1");
            }}
            className={`filterbutton ${
              this.isActiveFilter("1") ? "filterbutton__active" : ""
            }`}
          >
            Delivered
          </button>
          <button
            onClick={() => {
              this.handleSetFilter("2");
            }}
            className={`filterbutton ${
              this.isActiveFilter("2") ? "filterbutton__active" : ""
            }`}
          >
            Pending
          </button>
          <button
            onClick={() => {
              this.handleSetFilter("3");
            }}
            className={`filterbutton ${
              this.isActiveFilter("3") ? "filterbutton__active" : ""
            }`}
          >
            Not Delivered
          </button>
          <button
            onClick={() => {
              this.handleSetFilter("4");
            }}
            className={`filterbutton ${
              this.isActiveFilter("4") ? "filterbutton__active" : ""
            }`}
          >
            Expired
          </button>
        </div>
        <div>
          from:{" "}
          <Datetime
            value={this.state.fromDate}
            onChange={value => this.handleChangeFilterDate("fromDate", value)}
          />
          to:{" "}
          <Datetime
            value={this.state.toDate}
            onChange={value => this.handleChangeFilterDate("toDate", value)}
          />
        </div>
        <thead>
          <tr className="card__body">
            <p className="report__heading">
              {this.props.t("reports.phoneNumber")}
            </p>
            <p className="report__heading">
              {this.props.t("reports.creationTime")}
            </p>
            <p className="report__heading">
              {this.props.t("reports.processTime")}
            </p>
            <p className="report__heading">{this.props.t("reports.status")}</p>
          </tr>
        </thead>
        <table>
          <tbody>
            {this.getFiltered().map(deliveryReport => (
              <tr className="delivery__box">
                <td className="delivery__box__item">
                  {deliveryReport.PhoneNumber}
                </td>
                <td className="delivery__box__item">
                  {deliveryReport.CreationTimeStamp}
                </td>
                <td className="delivery__box__item">
                  {deliveryReport.ProcessTimeStamp}
                </td>
                <td
                  className={`deliveryreport ${getColor(
                    deliveryReport.DeliveryStatus
                  )}`}
                >
                  {this.props.t(`BI.status${deliveryReport.DeliveryStatus}`)}
                  {/* {`deliveryreport $status`} */}
                  {/* {deliveryReport.DeliveryStatus} */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
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
