import React, { Component } from "react";
import { withNamespaces } from "react-i18next";
import PhoneNumbers from "./PhoneNumbers";
import { toast } from "react-toastify";
import { setItem } from "../../localStorage";

import "react-tagsinput/react-tagsinput.css";

const initialFormState = {
  listName: "",
  listNameError: "",
  phoneNumber: "",
  phoneNumberError: ""
};

class NewContactList extends Component {
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
    let phoneNumberError = "";

    if (!this.state.listName) {
      listNameError = this.props.t("List name is missing");
    }

    if (!this.state.phoneNumber) {
      phoneNumberError = this.props.t("Phone number is missing");
    }

    if (listNameError || phoneNumberError) {
      this.setState({ listNameError, phoneNumberError });
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
            phoneNumber: this.state.phoneNumber
          }
        ]
      });
    }
  };
  delete = id => {
    const newTemplates = [...this.state.contactListTemplate];
    newTemplates.splice(id, 1);

    setItem("contactListTemplate", newTemplates);

    this.setState({
      contactListTemplate: newTemplates
    });
  };

  render() {
    return (
      <section>
        <form
          className="template__container lists__grid"
          onSubmit={this.handleSubmit}
        >
          <div className="template__title__container gradient__warm">
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
            <div className="error_message">{this.state.listNameError}</div>
          </label>

          <label className="test">
            <PhoneNumbers
              value={this.state.phoneNumber}
              onChange={numbers => this.setValue("phoneNumber", numbers)}
            />
            <div className="error_message">{this.state.phoneNumberError}</div>
          </label>

          <button className="button submit__button button__warm" type="submit">
            {this.props.t("template.button")}
          </button>
        </form>
        {this.state.contactListTemplate.length > 0 && (
          <div className="template__container dynamic__template">
            <div className="template__title__container gradient__warm">
              <p className="template__heading">
                {this.props.t("campaigns.templatesList")}
              </p>
            </div>
            {this.state.contactListTemplate.map((template, index) => (
              <div className="saved__messages__grid" key={index}>
                <div className="message__title"> {template.listName}</div>
                <div className="message__text"> {template.phoneNumber}</div>
                <button
                  className="button delete__button"
                  onClick={() => this.delete(index)}
                >
                  X
                </button>
              </div>
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default withNamespaces("common")(NewContactList);
