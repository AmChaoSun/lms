import React, { Component } from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import LoginForm from "../components/LoginForm";

class LoginPage extends Component {
  render() {
    return localStorage.getItem("jwt") ? (
      <Redirect
        to={{ pathname: "/home", state: { from: this.props.location } }}
      />
    ) : (
      <FormWrapper>
        <LoginForm />
      </FormWrapper>
    );
  }
}

//css
const FormWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

export default LoginPage;
