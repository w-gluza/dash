import React, { Component } from "react";
import { withNamespaces } from "react-i18next";
import { Link } from "react-router-dom";

const initialFormState = {
  name: "",
  nameError: "",
  email: "",
  emailError: "",
  password: "",
  passwordError: ""
};
class SignUp extends Component {
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
    let nameError = "";
    let emailError = "";
    let passwordError = "";

    if (!this.state.name) {
      nameError = this.props.t("Incorrect name");
    }

    if (!this.state.email) {
      emailError = this.props.t("Incorrect email");
    }

    if (!this.state.password) {
      passwordError = this.props.t("Password is missing");
    }

    if (nameError || emailError || passwordError) {
      this.setState({ nameError, emailError, passwordError });
      return false;
    }

    return true;
  };

  handleSubmit(e) {
    e.preventDefault();
    const isValid = this.validate();
    console.log("Dummy console log to check if sign up form was subbimited:");
    console.log(this.state);

    if (isValid) {
      console.log("Valid SignUp form");

      this.setState({
        ...initialFormState
      });
    }
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="formField">
          <label className="formField__label" htmlFor="name">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            className="formField__input"
            placeholder="Enter your full name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <div className="errorTest">{this.state.nameError}</div>
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
          <button className="formField__button">
            <Link to="/billings">Sign Up</Link>
          </button>
          <button className="formField__link" onClick={this.props.loginToggle}>
            I have an account
          </button>
        </div>
      </form>
    );
  }
}
export default withNamespaces("common")(SignUp);
