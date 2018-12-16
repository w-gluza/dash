import React, { Component } from "react";
import { withNamespaces } from "react-i18next";

const initialState = {
  title: "",
  message: "",
  titleError: "",
  messageError: ""
};

class Template extends Component {
  state = initialState;

  change = e => {
    const isCheckbox = e.target.type === "checkbox";
    this.setState({
      [e.target.id]: isCheckbox ? e.target.checked : e.target.value
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
      this.setState(initialState);
    }
  };

  render() {
    return (
      <section className="template__container">
        <form onSubmit={this.handleSubmit}>
          <div className="template__fieldset">
            <label>
              <input
                id="title"
                placeholder={this.props.t("template.title")}
                value={this.state.title}
                onChange={this.change}
                maxLength="50"
                titleerror={this.props.t("template.titleError")}
              />
              <div className="title__error_message">
                {this.state.titleError}
              </div>
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

            <button className="button" type="submit">
              {this.props.t("template.button")}
            </button>
          </div>
        </form>
      </section>
    );
  }
}

export default withNamespaces("common")(Template);
