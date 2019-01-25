import React, { Component } from "react";
import { withNamespaces } from "react-i18next";

class SignUp extends Component {
  state = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: ""
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: ""
    });
    this.props.onChange({
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: ""
    });
  };

  render() {
    return (
      <form className="authentication__wraper template__container">
        <label>
          <input
            name="firstName"
            placeholder="First Name"
            value={this.state.firstName}
            onChange={this.change}
            type="text"
          />
          <input
            name="lastName"
            placeholder="Last Name"
            value={this.state.lastName}
            onChange={this.change}
            type="text"
          />
          <input
            name="username"
            placeholder="Username"
            value={this.state.username}
            onChange={this.change}
            type="text"
          />
          <input
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.change}
            type="email"
          />
          <input
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.change}
            type="password"
          />
        </label>
        <button className="button submit__button" type="submit">
          Sign Up
        </button>
      </form>
    );
  }
}
export default withNamespaces("common")(SignUp);
