import React, { Component } from "react";
import { withNamespaces } from "react-i18next";
import { getItem, setItem } from "../../localStorage";
import * as Datetime from "react-datetime";

const initialFormState = {
  title: "",
  message: "",
  ActivationTimeStamp: "",
  sender: "",
  titleError: "",
  messageError: ""
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

  validate = () => {
    let titleError = "";
    let messageError = "";

    if (!this.state.title) {
      titleError = this.props.t("Title is missing");
    }

    if (!this.state.message) {
      messageError = this.props.t("Message is missing");
    }

    if (titleError || messageError) {
      this.setState({ titleError, messageError });
      return false;
    }

    return true;
  };

  handleSubmit = e => {
    e.preventDefault();
    const isValid = this.validate();

    if (isValid) {
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
    const selectedTemplate = this.state.templates.find(
      template => template.title === this.state.choosenTemplate
    );

    return (
      <section className="template__container">
        <div className="newSMS__container" onSubmit={this.handleSubmit}>
          <div className="template__title__container">
            <p className="template__heading">Create new template</p>
          </div>
          <label>
            <input
              id="title"
              placeholder={this.props.t("template.title")}
              value={this.state.title}
              onChange={this.change}
              maxLength="50"
              titleerror={this.props.t("template.titleError")}
            />
            <div className="title__error_message">{this.state.titleError}</div>
          </label>
          <label>
            <textarea
              id="message"
              placeholder={this.props.t("contact.message")}
              value={this.state.message}
              onChange={this.change}
              maxLength="500"
            />
            <div className="contact__error_message">
              {this.state.messageError}
            </div>
          </label>

          <Datetime isValidDate={valid} inputProps={{ placeholder: "N/A" }} />
          <p>
            <select
              id="choosenTemplate"
              value={this.state.choosenTemplate}
              onChange={this.change}
            >
              {this.state.templates.map((template, index) => (
                <option key={index} value={template.title}>
                  {template.title}
                </option>
              ))}
            </select>
          </p>
          {selectedTemplate && <p>{selectedTemplate.message}</p>}
          <p>
            Sender
            <label>
              <input
                id="title"
                placeholder={this.props.t("sender")}
                value={this.state.title}
                onChange={this.change}
                maxLength="50"
              />
            </label>
          </p>

          <button className="button" type="submit">
            {this.props.t("SEND")}
          </button>
        </div>
      </section>
    );
  }
}

export default withNamespaces("common")(NewSMS);
