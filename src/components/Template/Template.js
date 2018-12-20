import React, { Component } from "react";
import { withNamespaces } from "react-i18next";
import { getItem, setItem } from "../../localStorage";
import { toast } from "react-toastify";

const initialFormState = {
  title: "",
  message: "",
  titleError: "",
  messageError: ""
};

class Template extends Component {
  state = {
    ...initialFormState,
    templates: getItem("templates", [])
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
      const newTemplates = [
        ...this.state.templates,
        {
          title: this.state.title,
          message: this.state.message
        }
      ];

      toast("Template created!");

      setItem("templates", newTemplates);

      this.setState({
        ...initialFormState,
        templates: newTemplates
      });
    }
  };

  delete = id => {
    const newTemplates = [...this.state.templates];
    newTemplates.splice(id, 1);

    setItem("templates", newTemplates);

    this.setState({
      templates: newTemplates
    });
  };

  render() {
    return (
      <section className="template__container">
        <form className="new__message__container" onSubmit={this.handleSubmit}>
          <div className="template__title__container">
            <p className="template__heading">
              {this.props.t("campaigns.newSMSTemplate")}
            </p>
          </div>
          <label>
            <input
              id="title"
              placeholder={this.props.t("campaigns.newSMSTemplateTitle")}
              value={this.state.title}
              onChange={this.change}
              maxLength="50"
              titleerror={this.props.t("campaigns.newSMSTemplateTitleError")}
            />
            <div className="title__error_message">{this.state.titleError}</div>
          </label>

          <label>
            <textarea
              id="message"
              placeholder={this.props.t("campaigns.newSMSTemplateMessage")}
              value={this.state.message}
              onChange={this.change}
              maxLength="500"
            />
            <div className="contact__error_message">
              {this.state.messageError}
            </div>
          </label>

          <button className="button submit__templates" type="submit">
            {this.props.t("campaigns.newSMSTemplateButton")}
          </button>
        </form>

        {this.state.templates.length > 0 && (
          <div className="generated__template__container">
            <div className="template__title__container">
              <p className="template__heading">
                {this.props.t("campaigns.templatesList")}
              </p>
            </div>

            {this.state.templates.map((template, index) => (
              <div className="saved__messages__grid" key={index}>
                <div className="message__title">{template.title}</div>
                <div className="message__text">{template.message}</div>

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

export default withNamespaces("common")(Template);
