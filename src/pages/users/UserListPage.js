import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Table, Icon } from "antd";
import { getUsers, deleteUser, updateUser, createUser } from "../../actions";
import ConfirmModal from "../../components/ConfirmModal";
import EditModal from "../../components/EditUserModal";
import CreateUserModal from "../../components/CreateUserModal";

class UserListPage extends React.Component {
  //table column
  columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id"
    },
    {
      title: "NickName",
      dataIndex: "nickName",
      key: "nickName",
      render: (text, record) => <Link to={`/users/${record.id}`}>{text}</Link>
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
          <EditModal
            title="Edit User"
            okText="Update"
            record={record}
            onUpdate={this.props.updateUser}
          />
          <ConfirmModal
            buttonType="danger"
            buttonTag="Delete"
            title="Delete User"
            initialModalText={`Click OK to confirm delete user ${
              record.nickName
            }`}
            loadingModalText={`Deleting ${record.nickName}`}
            onConfirm={this.props.deleteUser}
            userId={record.id}
          />
        </span>
      )
    }
  ];

  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return (
      <div>
        {this.props.isLoading ? (
          <Icon type="loading" />
        ) : (
          <div>
            <CreateUserModal onCreate={this.props.createUser} />
            <Table dataSource={this.props.records} columns={this.columns} />
          </div>
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
  { getUsers, deleteUser, updateUser, createUser }
)(UserListPage);
