import React, { Component } from "react";
import { withNamespaces } from "react-i18next";
import { Link } from "react-router-dom";

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      name: ""
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

  handleSubmit(e) {
    e.preventDefault();

    console.log("Dummy console log to check if form was subbimited:");
    console.log(this.state);
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
        </div>
        <div className="formField">
          <button className="formField__button mr-20">Sign Up</button>
          <Link to="/" className="formField__link">
            I have an account
          </Link>
        </div>
      </form>
    );
  }
}
export default withNamespaces("common")(SignUp);
