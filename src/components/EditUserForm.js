import React from "react";
import { Form, Input, Select, Radio } from "antd";
const { Option } = Select;

const EditUserForm = () => {
  return (
    <Form layout="vertical">
      <Form.Item label="NickName">
        {this.props.getFieldDecorator("nickName", {
          initialValue: this.props.record.nickName,
          rules: [
            {
              required: true,
              message: "Please input the nickname of user!"
            }
          ]
        })(<Input />)}
      </Form.Item>
      <Form.Item label="Role">
        {this.props.getFieldDecorator("role", {
          initialValue: this.props.record.role,
          rules: [{ required: true, message: "Please select user role!" }]
        })(
          <Select>
            <Option value="Lecturer">Lecturer</Option>
            <Option value="General">General</Option>
            <Option value="OfficialLecturer">OfficialLecturer</Option>
          </Select>
        )}
      </Form.Item>
      <Form.Item
        label="IsActive"
        // className="collection-create-form_last-form-item"
      >
        {this.props.getFieldDecorator("isActive", {
          initialValue: this.props.record.isActive === "true",
          rules: [{ required: true, message: "Please select user status!" }]
        })(
          <Radio.Group>
            <Radio value={true}>Active</Radio>
            <Radio value={false}>Inactive</Radio>
          </Radio.Group>
        )}
      </Form.Item>
      <Form.Item label="E-mail">
        {this.props.getFieldDecorator("email", {
          initialValue: this.props.record.email,
          rules: [
            {
              type: "email",
              message: "The input is not valid E-mail!"
            }
          ]
        })(<Input />)}
      </Form.Item>
      <Form.Item label="Mobile">
        {this.props.getFieldDecorator("mobile", {
          initialValue: this.props.record.mobile
        })(<Input />)}
      </Form.Item>
    </Form>
  );
};

export default EditUserForm;
