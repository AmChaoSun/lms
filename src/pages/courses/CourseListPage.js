import React from "react";
import { connect } from "react-redux";
import { getLectures, getCourses, createCourse } from "../../actions";
import { Table, Divider, Icon, Modal } from "antd";
import CreateCourseModal from "../../components/CreateCourseModal";

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
      key: "action"
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
  { getLectures, getCourses, createCourse }
)(CourseListPage);
