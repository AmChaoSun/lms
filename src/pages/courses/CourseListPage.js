import React from "react";
import { connect } from "react-redux";
import {
  getLectures,
  getCourses,
  createCourse,
  updateCourse
} from "../../actions";
import { Table, Divider, Icon, Modal } from "antd";
import CreateCourseModal from "../../components/CreateCourseModal";
import EditCourseModal from "../../components/EditCourseModal";

//table columns

class CourseListPage extends React.Component {
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
      // render: text => <a href="javascript:;">{text}</a>
    },

    {
      title: "Lecturer",
      dataIndex: "lecturer",
      key: "lecturer"
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <span>
          <EditCourseModal
            record={record}
            onUpdate={this.props.updateCourse}
            lecturers={this.props.lecturers}
          />
          {/* <Divider type="vertical" />
          <ConfirmModal
            title="Delete User"
            initialModalText={`Click OK to confirm delete user ${
              record.nickName
            }`}
            loadingModalText={`Deleting ${record.nickName}`}
            onConfirm={this.props.deleteUser}
            recordId={record.id}
          /> */}
        </span>
      )
    }
  ];
  componentDidMount() {
    this.props.getCourses();
    this.props.getLectures({ role: "Lecturer" });
  }

  render() {
    return this.props.isLoading ? (
      <Icon type="loading" />
    ) : (
      <div>
        <CreateCourseModal
          onCreate={this.props.createCourse}
          lecturers={this.props.lecturers}
        />
        <Table dataSource={this.props.records} columns={this.columns} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    records: state.courses.records,
    isLoading: state.courses.isLoading,
    lecturers: state.courses.lecturers
  };
}

export default connect(
  mapStateToProps,
  { getLectures, getCourses, createCourse, updateCourse }
)(CourseListPage);
