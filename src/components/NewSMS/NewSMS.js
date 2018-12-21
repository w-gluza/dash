import React, { Component } from "react";
import { withNamespaces } from "react-i18next";
import { getItem, setItem } from "../../localStorage";
import * as Datetime from "react-datetime";
import PhoneNumbers from "../ContactList/PhoneNumbers";
import { toast } from "react-toastify";

const initialFormState = {
  title: "",
  message: "",
  ActivationTimeStamp: "",
  sender: "",
  titleError: "",
  messageError: "",
  phoneNumbers: "",
  phoneNumbersError: ""
};
const yesterday = Datetime.moment().subtract(1, "day");

const valid = function(current) {
  return current.isAfter(yesterday);
};

class NewSMS extends Component {
  state = {
    ...initialFormState,
    campaignTemplate: getItem("campaignTemplate", []),
    templates: getItem("templates", []),
    choosenTemplate: null
  };

  change = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  changeValue = (value, name) => {
    this.setState({
      [name]: value
    });
  };

  changeTemplate = e => {
    const selectedTemplate = this.state.templates.find(
      template => template.title === e.target.value
    );

    this.setState({
      message: selectedTemplate.message,
      [e.target.id]: e.target.value
    });
  };

  validate = () => {
    let titleError = "";
    let messageError = "";
    let phoneNumbersError = "";

    if (!this.state.title) {
      titleError = this.props.t("Title is missing");
    }

    if (!this.state.message) {
      messageError = this.props.t("Message is missing");
    }

    if (!this.state.phoneNumbers) {
      phoneNumbersError = this.props.t("Phone number is missing");
    }

    if (titleError || messageError || phoneNumbersError) {
      this.setState({ titleError, messageError, phoneNumbersError });
      return false;
    }

    return true;
  };

  handleSubmit = e => {
    e.preventDefault();
    const isValid = this.validate();

    if (isValid) {
      toast("Contact list template created");

      const newcampaignTemplate = [
        ...this.state.campaignTemplate,
        {
          title: this.state.title,
          message: this.state.message
        }
      ];

      setItem("campaignTemplate", newcampaignTemplate);

      this.setState({
        ...initialFormState,
        campaignTemplate: newcampaignTemplate
      });
    }
  };

  delete = id => {
    const newcampaignTemplate = [...this.state.campaignTemplate];
    newcampaignTemplate.splice(id, 1);

    setItem("campaignTemplate", newcampaignTemplate);

    this.setState({
      campaignTemplate: newcampaignTemplate
    });
  };

  render() {
    return (
      <section className="template__container">
        <form className="newSMS__container" onSubmit={this.handleSubmit}>
          <div className="template__title__container">
            <p className="template__heading">
              {this.props.t("quickSMS.sendSMS")}
            </p>
          </div>
          <label>
            <input
              id="title"
              placeholder={this.props.t("quickSMS.sendSMSTitle")}
              value={this.state.title}
              onChange={this.change}
              maxLength="50"
              titleerror={this.props.t("quickSMS.sendSMSTitleError")}
            />
            <div className="title__error_message">{this.state.titleError}</div>
          </label>
          <label>
            <textarea
              id="message"
              placeholder={this.props.t("quickSMS.sendSMSMessage")}
              value={this.state.message}
              onChange={this.change}
              maxLength="500"
            />
            <div className="contact__error_message">
              {this.state.messageError}
            </div>
          </label>

          <div className="sms__container">
            <Datetime
              isValidDate={valid}
              inputProps={{ placeholder: "2018-12-18" }}
              className="calendar"
            />
            <p>
              <select
                id="choosenTemplate"
                value={this.state.choosenTemplate || ""}
                onChange={this.changeTemplate}
              >
                <option disabled defaultValue value={null}>
                  Choose your template
                </option>
                {this.state.templates.map((template, index) => (
                  <option key={index} value={template.title}>
                    {template.title}
                  </option>
                ))}
              </select>
            </p>
          </div>
          <div>
            <label>
              <PhoneNumbers
                value={this.state.phoneNumbers}
                onChange={value => this.changeValue(value, "phoneNumbers")}
              />
              <div className="title__error_message">
                {this.state.phoneNumbersError}
              </div>
            </label>
          </div>
          <p>
            <label>
              <input
                id="sender"
                placeholder={this.props.t("quickSMS.sendSMSSender")}
                value={this.state.sender}
                onChange={this.change}
                maxLength="50"
              />
            </label>
          </p>

          <button className="button submit__button" type="submit">
            {this.props.t("SEND")}
          </button>
          {/* </div> */}
        </form>
      </section>
    );
  }
}

export default withNamespaces("common")(NewSMS);
