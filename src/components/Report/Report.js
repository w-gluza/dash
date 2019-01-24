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
    toDate: moment(),
    recordsToShow: 15
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

  handleShowMore = () => {
    this.setState(state => ({
      recordsToShow: state.recordsToShow + 15
    }));
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
    });
  };

  render() {
    const reports = this.getFiltered();

    return (
      <section className="report__container">
        <div className="template__title__container report__title__container">
          <p className="template__heading">{this.props.t("reports.heading")}</p>
        </div>{" "}
        <div className="filters__status__containers">
          <span className="report__span">
            {this.props.t("reports.filter")}:
          </span>
          <button
            onClick={() => {
              this.handleSetFilter("all");
            }}
            className={`filterbutton ${
              this.isActiveFilter("all") ? "filterbutton__active" : ""
            }`}
          >
            {this.props.t("reports.all")}
          </button>
          <button
            onClick={() => {
              this.handleSetFilter("0");
            }}
            className={`filterbutton ${
              this.isActiveFilter("0") ? "filterbutton__active" : ""
            }`}
          >
            {this.props.t("reports.status0")}
          </button>
          <button
            onClick={() => {
              this.handleSetFilter("1");
            }}
            className={`filterbutton ${
              this.isActiveFilter("1") ? "filterbutton__active" : ""
            }`}
          >
            {this.props.t("reports.status1")}
          </button>
          <button
            onClick={() => {
              this.handleSetFilter("2");
            }}
            className={`filterbutton ${
              this.isActiveFilter("2") ? "filterbutton__active" : ""
            }`}
          >
            {this.props.t("reports.status2")}
          </button>
          <button
            onClick={() => {
              this.handleSetFilter("3");
            }}
            className={`filterbutton ${
              this.isActiveFilter("3") ? "filterbutton__active" : ""
            }`}
          >
            {this.props.t("reports.status3")}
          </button>
          <button
            onClick={() => {
              this.handleSetFilter("4");
            }}
            className={`filterbutton ${
              this.isActiveFilter("4") ? "filterbutton__active" : ""
            }`}
          >
            {this.props.t("reports.status4")}
          </button>
        </div>
        <div className="report__datepicker">
          <span className="report__span">{this.props.t("reports.from")}:</span>
          <Datetime
            value={this.state.fromDate}
            onChange={value => this.handleChangeFilterDate("fromDate", value)}
          />
          <span className="report__span">{this.props.t("reports.to")}:</span>
          <Datetime
            value={this.state.toDate}
            onChange={value => this.handleChangeFilterDate("toDate", value)}
          />
        </div>
        <table>
          <thead>
            <tr className="card__body">
              <th>{this.props.t("reports.phoneNumber")}</th>
              <th>{this.props.t("reports.operator")}</th>
              <th>{this.props.t("reports.nrSms")}</th>
              <th>{this.props.t("reports.message")}</th>
              <th>{this.props.t("reports.sender")}</th>
              <th>{this.props.t("reports.user")}</th>
              <th>{this.props.t("reports.creationTime")}</th>
              <th>{this.props.t("reports.processTime")}</th>
              <th>{this.props.t("reports.status")}</th>
            </tr>
          </thead>
          <tbody>
            {reports
              .slice(0, this.state.recordsToShow)
              .map((deliveryReport, index) => (
                <tr className="delivery__box report__columns" key={index}>
                  <td className="delivery__box__item">
                    {deliveryReport.PhoneNumber}
                  </td>
                  <td className="delivery__box__item">
                    {deliveryReport.operator}
                  </td>
                  <td className="delivery__box__item">
                    {deliveryReport.nrSms}
                  </td>
                  <td className="delivery__box__item">
                    {deliveryReport.message}
                  </td>
                  <td className="delivery__box__item">
                    {deliveryReport.sender}
                  </td>
                  <td className="delivery__box__item">{deliveryReport.user}</td>
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
                    {this.props.t(
                      `reports.status${deliveryReport.DeliveryStatus}`
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {reports.length > this.state.recordsToShow ? (
          <button onClick={this.handleShowMore}>Show more...</button>
        ) : null}
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
