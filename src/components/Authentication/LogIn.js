import React, { Component } from "react";
import { withNamespaces } from "react-i18next";
import { Redirect } from "react-router-dom";

const initialFormState = {
  email: "",
  emailError: "",
  password: "",
  passwordError: ""
};

class LogIn extends Component {
  constructor() {
    super();

    this.state = {
      ...initialFormState
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  validate = () => {
    let emailError = "";
    let passwordError = "";

    if (!this.state.email) {
      emailError = this.props.t(
        "Incorrect email, please type ANY email like hello@gmail.com"
      );
    }

    if (!this.state.password) {
      passwordError = this.props.t("Password is missing, please type any text");
    }

    if (emailError || passwordError) {
      this.setState({ emailError, passwordError });
      return false;
    } else {
      this.setState({ isValid: true });
    }
  };

  handleSubmit(e) {
    e.preventDefault();
    const isValid = this.validate();
    console.log("Dummy console log to check if log in form was subbimited:");
    console.log(this.state);

    if (isValid) {
      console.log("Valid LogIn Form");

      this.setState({
        ...initialFormState
      });
    }
  }
  render() {
    if (this.state.isValid === true) {
      return <Redirect to="/billings" />;
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="formField">
          <label className="formField__label" htmlFor="email">
            E-Mail Address
          </label>
          <input
            type="email"
            id="email"
            className="formField__input"
            placeholder="Enter your email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <div className="errorTest">{this.state.emailError}</div>
        </div>
        <div className="formField">
          <label className="formField__label" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="formField__input"
            placeholder="Enter your password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <div className="errorTest">{this.state.passwordError}</div>
        </div>

        <div className="formField">
          <button className="formField__button" onSubmit={this.handleSubmit}>
            Log In
          </button>
          <button className="formField__link" onClick={this.props.signupToggle}>
            Create an account
          </button>
        </div>
      </form>
    );
  }
}
export default withNamespaces("common")(LogIn);
