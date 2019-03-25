import React from "react";
import { Button, Modal, Form, Input, Select, Radio } from "antd";
const { Option } = Select;

const CollectionCreateForm = Form.create({ name: "form_in_modal" })(
  // eslint-disable-next-line
  class extends React.Component {
    render() {
      const { visible, onCancel, onUpdate, form, record } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title={this.props.title}
          okText={this.props.okText}
          onCancel={onCancel}
          onOk={onUpdate}
        >
          <Form layout="vertical">
            <Form.Item label="NickName">
              {getFieldDecorator("nickName", {
                initialValue: record.nickName,
                rules: [
                  {
                    required: true,
                    message: "Please input the nickname of user!"
                  }
                ]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Role">
              {getFieldDecorator("role", {
                initialValue: record.role,
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
                initialValue: record.isActive === "true",
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
            <Form.Item label="E-mail">
              {getFieldDecorator("email", {
                initialValue: record.email,
                rules: [
                  {
                    type: "email",
                    message: "The input is not valid E-mail!"
                  }
                ]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Mobile">
              {getFieldDecorator("mobile", { initialValue: record.mobile })(
                <Input />
              )}
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  }
);

class EditUserModal extends React.Component {
  state = {
    visible: false
  };

  showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleUpdate = () => {
    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log("Received values of form: ", values);
      values["id"] = this.props.record.id;
      this.props.onUpdate(values);
      form.resetFields();
      this.setState({ visible: false });
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  render() {
    return (
      <div>
        <Button onClick={this.showModal}>Edit</Button>
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onUpdate={this.handleUpdate}
          title={this.props.title}
          okText={this.props.okText}
          record={this.props.record}
        />
      </div>
    );
  }
}

export default EditUserModal;
