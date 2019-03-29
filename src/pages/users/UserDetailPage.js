import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import pathParse from "path-parse";
// import DisplayCard from "../../components/DisplayCard";
import { Icon, Divider, Table } from "antd";
import { Collapse } from "antd";
import ConfirmModal from "../../components/ConfirmModal";
import EditModal from "../../components/EditUserModal";
import {
  deleteUser,
  updateUser,
  getUserById,
  dropCourse,
  enrollCourse,
  getCourses
} from "../../actions";
import UserProfile from "../../components/UserProfile";
import EnrollCourseModal from "../../components/EnrollCourseModal";

const Panel = Collapse.Panel;

function callback(key) {
  console.log(key);
}

const IconSet = props => {
  return (
    <span>
      <EditModal
        title="Edit User"
        okText="Update"
        record={props.record}
        onUpdate={props.onUpdate}
      />
      <Divider type="vertical" />
      <ConfirmModal
        title="Delete User"
        initialModalText={`Click OK to confirm delete user ${
          props.record.nickName
        }`}
        loadingModalText={`Deleting ${props.record.nickName}`}
        onConfirm={props.onConfirm}
        recordId={props.record.id}
      />
    </span>
  );
};

class UserDetailPage extends React.Component {
  state = { id: parseInt(pathParse(this.props.location.pathname).name) };

  columns = [
    {
      title: "Id",
      dataIndex: "courseId",
      key: "courseId"
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <Link to={`/courses/${record.courseId}`}>{text}</Link>
      )
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
        <ConfirmModal
          title="Drop course"
          initialModalText={`Click OK to drop course: ${record.name}`}
          loadingModalText={`Dropping ${record.name}`}
          onConfirm={this.props.dropCourse}
          recordId={record.courseId}
        />
      )
    }
  ];
  componentDidMount() {
    this.props.getUserById(this.state.id);
  }
  render() {
    return this.props.isLoading ? (
      <Icon type="loading" />
    ) : (
      <Collapse defaultActiveKey={["1"]} onChange={callback}>
        <Panel
          header="Basic information"
          key="1"
          extra={
            <IconSet
              record={this.props.entity}
              onUpdate={this.props.updateUser}
              onConfirm={this.props.deleteUser}
            />
          }
        >
          <UserProfile entity={this.props.entity} />
        </Panel>
        <Panel
          header="Enrolled courses"
          key="2"
          extra={
            <EnrollCourseModal
              title="Enroll Course"
              okText="Select"
              onSelect={this.props.enrollCourse}
              showCourses={this.props.getCourses}
              courses={this.props.courses}
              courseLoading={this.props.courseLoading}
            />
          }
        >
          <Table
            columns={this.columns}
            dataSource={this.props.entity.courses}
          />
        </Panel>
      </Collapse>
    );
  }
}

function mapStateToProps(state) {
  return {
    entity: state.users.entity,
    records: state.users.records,
    isLoading: state.users.isLoading,
    courses: state.courses.records,
    courseLoading: state.courses.isLoading
  };
}
export default connect(
  mapStateToProps,
  { deleteUser, updateUser, getUserById, dropCourse, enrollCourse, getCourses }
)(UserDetailPage);
