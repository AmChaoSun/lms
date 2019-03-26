import React from "react";
import { connect } from "react-redux";
import pathParse from "path-parse";
// import DisplayCard from "../../components/DisplayCard";
import { Icon, Divider } from "antd";
import { Collapse } from "antd";
import ConfirmModal from "../../components/ConfirmModal";
import EditModal from "../../components/EditUserModal";
import { deleteUser, updateUser, getUserById } from "../../actions";

const Panel = Collapse.Panel;

function callback(key) {
  console.log(key);
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

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
    return this.props.records.get(this.state.id) && !this.props.isLoading ? (
      <Collapse defaultActiveKey={["1"]} onChange={callback}>
        <Panel
          header="Basic information"
          key="1"
          extra={
            <IconSet
              record={this.props.records.get(this.state.id)}
              onUpdate={this.props.updateUser}
              onConfirm={this.props.deleteUser}
            />
          }
        >
          <p>{text}</p>
        </Panel>
        <Panel header="Enrolled courses" key="2">
          <p>{text}</p>
        </Panel>
      </Collapse>
    ) : (
      <Icon type="loading" />
    );
  }
}

function mapStateToProps(state) {
  console.log(state.users.records);
  return {
    records: state.users.records,
    isLoading: state.users.isLoading
  };
}
export default connect(
  mapStateToProps,
  { deleteUser, updateUser, getUserById }
)(UserDetailPage);
