import React, { Component } from "react";
import { withNamespaces } from "react-i18next";
import { getItem, setItem } from "../../localStorage";
import * as Datetime from 'react-datetime';


const initialFormState = {
  title: "",
  description: "",
  message: "",
  ActivationTimeStamp: "",
  Sender: "",
  SenderError: "dupa",
  titleError: "",
  messageError: ""
};
const yesterday = Datetime.moment().subtract( 1, 'day' );

const valid = function( current ){
    return current.isAfter( yesterday );
};
class NewCampaign extends Component {
  state = {
    ...initialFormState,
    campaignTemplate: getItem("campaignTemplate", [])
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
              <input
                id="ActivationTimeStamp"
                type="datetime-local"
                placeholder={this.props.t("template.ActivationTimeStamp")}
                value={this.state.ActivationTimeStamp}
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
<Datetime isValidDate={valid } inputProps={{ placeholder: 'N/A'}}/>
          </div>
        </form>

        <div>
          {this.state.campaignTemplate.map((template, index) => (
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

export default withNamespaces("common")(NewCampaign);
