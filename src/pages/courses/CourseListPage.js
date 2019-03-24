import React from "react";
import { connect } from "react-redux";
import { getCourses } from "../../actions";
import { Table, Divider, Icon } from "antd";

//table columns
const columns = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id"
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
        {/* <a href="javascript:;">Delete {record.name}</a> */}
        <Divider type="vertical" />
        {/* <a href="javascript:;">Edit</a> */}
      </span>
    )
  }
];
class CourseListPage extends React.Component {
  componentDidMount() {
    this.props.getCourses();
  }

  render() {
    return this.props.isLoading ? (
      <Icon type="loading" />
    ) : (
      <Table dataSource={this.props.records} columns={columns} />
    );
  }
}

function mapStateToProps(state) {
  return {
    records: state.courses.records,
    isLoading: state.courses.isLoading
  };
}

export default connect(
  mapStateToProps,
  { getCourses }
)(CourseListPage);
