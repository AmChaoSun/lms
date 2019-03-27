import React from "react";
import { connect } from "react-redux";
import pathParse from "path-parse";
// import DisplayCard from "../../components/DisplayCard";
import { Icon, Divider } from "antd";
import { Collapse } from "antd";
import ConfirmModal from "../../components/ConfirmModal";
import EditModal from "../../components/EditUserModal";
import { deleteUser, updateUser, getUserById } from "../../actions";
import UserProfile from "../../components/UserProfile";

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
        <Panel header="Enrolled courses" key="2">
          <div />
        </Panel>
      </Collapse>
    );
  }
}

function mapStateToProps(state) {
  return {
    entity: state.users.entity,
    records: state.users.records,
    isLoading: state.users.isLoading
  };
}
export default connect(
  mapStateToProps,
  { deleteUser, updateUser, getUserById }
)(UserDetailPage);
