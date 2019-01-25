import React, { Component } from "react";
import { withNamespaces } from "react-i18next";

class LogIn extends Component {
  state = {
    username: "",
    usernameError: "",
    password: "",
    passwordError: ""
  };

  change = e => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  validate = () => {
    let isError = false;
    const errors = {};

    if (this.state.username.length < 5) {
      isError = true;
      errors.usernameError = "Username at least 5 signs";
    }
    if (isError) {
      this.setState({
        ...this.state,
        ...errors
      });
    }
    return isError;
  };

  onSubmit = e => {
    e.preventDefault();
    const err = this.validate();
    if (!err) {
      this.setState({
        username: "",
        password: ""
      });
      this.props.onChange({
        username: "",
        password: ""
      });
    }
  };
  render() {
    return (
      <form>
        <label>
          <input
            name="username"
            placeholder="username"
            value={this.state.username}
            onChange={e => this.change(e)}
          />
        </label>
        Something
      </form>
    );
  }
}
export default withNamespaces("common")(LogIn);
