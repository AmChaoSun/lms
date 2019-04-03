import React from "react";
import { Modal, Form, Input, Select, Radio, Icon } from "antd";

const { Option } = Select;
const { TextArea } = Input;

const CollectionCreateForm = Form.create({ name: "edit course modal" })(
  // eslint-disable-next-line
  class extends React.Component {
    render() {
      const { visible, onCancel, onUpdate, form, record } = this.props;
      const { getFieldDecorator } = form;
      let initPublisherId = null;
      if (this.props.lecturers) {
        let lecturer = this.props.lecturers.find(lecturer => {
          return lecturer.nickName == record.lecturer;
        });
        if (lecturer) {
          initPublisherId = lecturer.id;
        }
      }
      return (
        <Modal
          visible={visible}
          title="Edit Course"
          okText="Update"
          onCancel={onCancel}
          onOk={onUpdate}
        >
          <Form layout="vertical">
            <Form.Item label="Name">
              {getFieldDecorator("name", {
                initialValue: record.name,
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
                initialValue: initPublisherId,
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
              {getFieldDecorator("description", {
                initialValue: record.description
              })(<TextArea />)}
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
      values["courseId"] = this.props.record.courseId;
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
      <span>
        {/* <Button onClick={this.showModal}>Edit</Button> */}
        <Icon type="edit" onClick={this.showModal} />
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onUpdate={this.handleUpdate}
          record={this.props.record}
          lecturers={this.props.lecturers}
        />
      </span>
    );
  }
}

export default EditUserModal;
