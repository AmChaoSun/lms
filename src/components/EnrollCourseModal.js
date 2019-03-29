import React from "react";
import { Modal, Table, Icon } from "antd";

class CourseTable extends React.Component {
  state = { courseId: null };
  columns = [
    {
      title: "Id",
      dataIndex: "courseId",
      key: "courseId"
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Lecturer",
      dataIndex: "lecturer",
      key: "lecturer"
    }
  ];

  componentDidMount() {
    this.props.showCourses();
  }
  render() {
    return (
      <Modal
        visible={this.props.visible}
        title={this.props.title}
        okText={this.props.okText}
        onCancel={this.props.onCancel}
        onOk={this.props.onSelect}
      >
        <Table columns={this.columns} dataSource={this.props.courses} />
      </Modal>
    );
  }
}

class EnrollCourseModal extends React.Component {
  state = {
    visible: false
  };

  showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleSelect = id => {
    this.props.onSelect(id);
    this.setState({ visible: false });
  };

  render() {
    return (
      <span>
        {/* <Button onClick={this.showModal}>Edit</Button> */}
        <Icon type="plus-circle" onClick={this.showModal} />
        <CourseTable
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onSelect={this.handleSelect}
          title={this.props.title}
          okText={this.props.okText}
          showCourses={this.props.showCourses}
          courses={this.props.courses}
          courseLoading={this.props.courseLoading}
          //   onChange={console.log(123)}
        />
      </span>
    );
  }
}

export default EnrollCourseModal;
