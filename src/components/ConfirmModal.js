import React from "react";
import { Modal, Button } from "antd";

// props{
//     buttonType: "primary",
//     buttonTag: "",
//     title: "",
//     modalText: ""
// }
class ConfirmModal extends React.Component {
  state = {
    ModalText: this.props.initialModalText,
    visible: false,
    confirmLoading: false
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = () => {
    this.setState({
      ModalText: this.props.loadingModalText,
      confirmLoading: true
    });
    try {
      setTimeout(() => {
        this.setState({
          visible: false,
          confirmLoading: false
        });
      }, 2000);
      this.props.onConfirm(this.props.userId);
    } catch (error) {}
  };

  handleCancel = () => {
    console.log("Clicked cancel button");
    this.setState({
      visible: false
    });
  };

  render() {
    const { visible, confirmLoading } = this.state;
    // console.log(this.props);
    return (
      <div>
        <Button type={this.props.buttonType} onClick={this.showModal}>
          {this.props.buttonTag}
        </Button>
        <Modal
          title={this.props.title}
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
        >
          <p>{this.state.ModalText}</p>
        </Modal>
      </div>
    );
  }
}

export default ConfirmModal;
