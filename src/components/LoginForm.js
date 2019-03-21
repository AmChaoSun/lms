import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import { login } from "../actions";

class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        this.props.login(values);
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return this.props.status.tryLogin ? (
      <Button type="primary" loading>
        Signing in
      </Button>
    ) : (
      <MyForm onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator("userName", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("remember", {
            valuePropName: "checked",
            initialValue: true
          })(<Checkbox>Remember me</Checkbox>)}
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
        </Form.Item>
      </MyForm>
    );
  }
}

const MyForm = styled(Form)`
  max-width: 300px;
`;

function mapStateToProps(state) {
  return {
    status: state.login
  };
}

const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(
  NormalLoginForm
);

export default connect(
  mapStateToProps,
  { login }
)(WrappedNormalLoginForm);

// export default WrappedNormalLoginForm;
