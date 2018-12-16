import React, { Component } from "react";
import { withNamespaces } from "react-i18next";
import { getItem, setItem } from "../../localStorage";

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

        <div>
          {this.state.templates.map((template, index) => (
            <div key={index}>
              {template.title} {template.message}
              <button onClick={() => this.delete(index)}>Delete</button>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default withNamespaces("common")(Template);
