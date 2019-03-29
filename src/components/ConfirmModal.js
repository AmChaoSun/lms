import React from "react";
import { Modal, Icon } from "antd";

// props{
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

    this.setState({
      visible: false,
      confirmLoading: false
    });

    this.props.onConfirm(this.props.recordId);
    window.location = "/users";
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
      <span>
        {/* <Button type={this.props.buttonType} onClick={this.showModal}>
          {this.props.buttonTag}
        </Button> */}
        <Icon type="delete" onClick={this.showModal} />
        <Modal
          title={this.props.title}
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
        >
          <p>{this.state.ModalText}</p>
        </Modal>
      </span>
    );
  }
}

export default ConfirmModal;
