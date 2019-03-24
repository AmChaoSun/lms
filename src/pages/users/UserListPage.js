import React from "react";
import { connect } from "react-redux";
import { getUsers } from "../../actions";
import { Table, Divider, Icon } from "antd";

//table columns
const columns = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id"
  },
  {
    title: "NickName",
    dataIndex: "nickName",
    key: "nickName"
    // render: text => <a href="javascript:;">{text}</a>
  },

  {
    title: "Role",
    dataIndex: "role",
    key: "role"
  },
  {
    title: "IsActive",
    dataIndex: "isActive",
    key: "isActive"
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
class UserListPage extends React.Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return (
      <div>
        {this.props.isLoading ? (
          <Icon type="loading" />
        ) : (
          <Table dataSource={this.props.records} columns={columns} />
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    records: state.users.records,
    isLoading: state.users.isLoading
  };
}

export default connect(
  mapStateToProps,
  { getUsers }
)(UserListPage);
