import React from "react";
import { connect } from "react-redux";
// import CircularProgress from "@material-ui/core/CircularProgress";
// import List from "../../components/List";
import { getStudents } from "../../actions";
import { Table, Divider } from "antd";

const columns = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id"
  },
  {
    title: "NickName",
    dataIndex: "nickName",
    key: "nickName",
    render: text => <a href="javascript:;">{text}</a>
  },

  {
    title: "Role",
    dataIndex: "role",
    key: "role"
  },
  {
    title: "IsActive",
    key: "isActive",
    dataIndex: "isActive"
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <span>
        <a href="javascript:;">Delete {record.name}</a>
        <Divider type="vertical" />
        <a href="javascript:;">Edit</a>
      </span>
    )
  }
];
class StudentListPage extends React.Component {
  state = {
    isLoading: false
  };

  componentDidMount() {
    this.props.getStudents();
  }

  render() {
    return (
      <div>
        {this.state.isLoading ? (
          <div />
        ) : (
          <Table dataSource={this.props.records} columns={columns} />
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    records: state.students.students
    // isLoading: state.students.isLoading
  };
}

export default connect(
  mapStateToProps,
  { getStudents }
)(StudentListPage);
