import React, { Component } from "react";
import { withNamespaces } from "react-i18next";
import PhoneNumbers from "./PhoneNumbers";
import { toast } from "react-toastify";

import "react-tagsinput/react-tagsinput.css";

const initialFormState = {
  listName: "",
  description: "",
  listNameError: "",
  descriptionError: "",
  phoneNumber: "",
  phoneNumberError: ""
};

class ContactList extends Component {
  state = {
    ...initialFormState,
    contactListTemplate: []
  };

  change = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  setValue = (name, value) => {
    this.setState({
      [name]: value
    });
  };

  validate = () => {
    let listNameError = "";
    let descriptionError = "";
    let phoneNumberError = "";

    if (!this.state.listName) {
      listNameError = this.props.t("List name is missing");
    }

    if (!this.state.description) {
      descriptionError = this.props.t("Description is missing");
    }

    if (!this.state.phoneNumber) {
      phoneNumberError = this.props.t("Phone number is missing");
    }

    if (listNameError || descriptionError || phoneNumberError) {
      this.setState({ listNameError, descriptionError, phoneNumberError });
      return false;
    }

    return true;
  };

  handleSubmit = e => {
    e.preventDefault();
    const isValid = this.validate();

    if (isValid) {
      toast("Contact list template created");

      this.setState({
        ...initialFormState,
        contactListTemplate: [
          ...this.state.contactListTemplate,
          {
            listName: this.state.listName,
            description: this.state.description,
            phoneNumber: this.state.phoneNumber
          }
        ]
      });
    }
  };

  render() {
    return (
      <section className="template__container">
        <form onSubmit={this.handleSubmit}>
          <div className="newNumbersList__container">
            <div className="template__title__container">
              <p className="template__heading">
                {this.props.t("contactList.heading")}
              </p>
            </div>
            <label>
              <input
                id="listName"
                placeholder={this.props.t("contactList.description")}
                value={this.state.title}
                onChange={this.change}
                maxLength="50"
                titleerror={this.props.t("contactlist.descriptionError")}
              />
              <div className="title__error_message">
                {this.state.listNameError}
              </div>
            </label>

            <label>
              <textarea
                id="description"
                placeholder={this.props.t("contactList.description")}
                value={this.state.message}
                onChange={this.change}
                maxLength="500"
              />
              <div className="contact__error_message">
                {this.state.descriptionError}
              </div>
            </label>

            <label>
              <PhoneNumbers
                value={this.state.phoneNumber}
                onChange={numbers => this.setValue("phoneNumber", numbers)}
              />

              <div className="title__error_message">
                {this.state.phoneNumberError}
              </div>
            </label>

            <button className="button" type="submit">
              {this.props.t("template.button")}
            </button>
          </div>
        </form>

        <div className="generated__template__container">
          <div className="template__title__container">
            <p className="template__heading">
              {this.props.t("campaigns.templatesList")}
            </p>
          </div>
          {this.state.contactListTemplate.map((template, index) => (
            <div key={index}>
              {template.listName} {template.description} {template.phoneNumber}
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default withNamespaces("common")(ContactList);
