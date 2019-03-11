import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class LoginPage extends Component {
  state = { credential: "", identifier: "" };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleSubmit = async () => {};
  render() {
    return (
      <div>
        <TextField
          id="identifier"
          type="input"
          placeholder="identifier"
          onChange={this.handleChange("identifier")}
        />
        ;
        <TextField
          id="credential"
          type="input"
          placeholder="credential"
          onChange={this.handleChange("credential")}
        />
        ;<Button>Sign in</Button>
      </div>
    );
  }
}

export default LoginPage;
