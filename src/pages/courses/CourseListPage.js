import React from "react";
import { connect } from "react-redux";
import {
  getLectures,
  getCourses,
  createCourse,
  updateCourse,
  deleteCourse
} from "../../actions";
import { Table, Divider, Icon } from "antd";
import CreateCourseModal from "../../components/CreateCourseModal";
import EditCourseModal from "../../components/EditCourseModal";
import ConfirmModal from "../../components/ConfirmModal";

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
          <Divider type="vertical" />
          <ConfirmModal
            title="Delete Course"
            initialModalText={`Click OK to confirm delete course: ${
              record.name
            }`}
            loadingModalText={`Deleting ${record.name}`}
            onConfirm={this.props.deleteCourse}
            recordId={record.courseId}
            redirectPath="/courses"
          />
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
  { getLectures, getCourses, createCourse, updateCourse, deleteCourse }
)(CourseListPage);
