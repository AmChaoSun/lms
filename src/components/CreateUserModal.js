import React from "react";
import styled from "styled-components";
import { Button, Modal, Form, Input, Select, Radio, Icon } from "antd";
const { Option } = Select;

const CollectionCreateForm = Form.create({ name: "form_in_modal" })(
  // eslint-disable-next-line
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title={this.props.title}
          okText={this.props.okText}
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <Form.Item label="NickName">
              {getFieldDecorator("nickName", {
                rules: [
                  {
                    required: true,
                    message: "Please input the nickname of user!"
                  }
                ]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Password">
              {getFieldDecorator("credential", {
                rules: [
                  {
                    required: true,
                    type: "string",
                    min: 8,
                    max: 20,
                    message: "Password should between 8 ~ 20!"
                  }
                ]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="ConFirm Password">
              {getFieldDecorator("confirmedCredential", {
                rules: [
                  {
                    required: true,
                    type: "string",
                    message: "Please confirm the password!"
                  },
                  {
                    validator: (rule, value, callback) => {
                      if (
                        !(
                          value &&
                          value ===
                            this.props.form.getFieldProps("credential").value
                        )
                      ) {
                        callback("Please enter the same password as above");
                      }

                      callback();
                    }
                  }
                ]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Role">
              {getFieldDecorator("role", {
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
              {getFieldDecorator("isActive", {
                rules: [
                  { required: true, message: "Please select user status!" }
                ]
              })(
                <Radio.Group>
                  <Radio value={true}>Active</Radio>
                  <Radio value={false}>Inactive</Radio>
                </Radio.Group>
              )}
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  }
);

class CreateUserModal extends React.Component {
  state = {
    visible: false
  };

  showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleCreate = () => {
    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      this.props.onCreate(values);
      form.resetFields();
      this.setState({ visible: false });
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  render() {
    return (
      <ModalWrapper>
        <Button type="primary" onClick={this.showModal}>
          <Icon type="plus" /> New user
        </Button>
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
          title="Create user"
          okText="Create"
        />
      </ModalWrapper>
    );
  }
}

const ModalWrapper = styled.div`
  margin-top: -34px;
`;
export default CreateUserModal;
