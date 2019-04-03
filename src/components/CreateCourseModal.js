import React from "react";
import styled from "styled-components";
import { Button, Modal, Form, Input, Select, Radio, Icon } from "antd";
const { Option } = Select;
const { TextArea } = Input;

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
            <Form.Item label="Name">
              {getFieldDecorator("name", {
                rules: [
                  {
                    required: true,
                    message: "Please input the name of course!"
                  }
                ]
              })(<Input />)}
            </Form.Item>

            <Form.Item label="Publisher">
              {getFieldDecorator("publisherId", {
                rules: [{ required: true, message: "Please select publisher!" }]
              })(
                <Select>
                  {this.props.lecturers.map(record => (
                    <Option key={record.id} value={record.id}>
                      {record.nickName}
                    </Option>
                  ))}
                </Select>
              )}
            </Form.Item>
            <Form.Item label="Description">
              {getFieldDecorator("description", {})(<TextArea rows={4} />)}
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
          <Icon type="plus" /> New course
        </Button>
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
          title="Create Course"
          okText="Create"
          lecturers={this.props.lecturers}
        />
      </ModalWrapper>
    );
  }
}

const ModalWrapper = styled.div`
  margin-top: -34px;
`;
export default CreateUserModal;
