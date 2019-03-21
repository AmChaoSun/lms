import React from "react";
import { connect } from "react-redux";
// import CircularProgress from "@material-ui/core/CircularProgress";
import List from "../../components/List";
import { getStudents } from "../../actions";

class StudentListPage extends React.Component {
  state = {
    isLoading: true
  };

  componentDidMount() {
    this.props.getStudents();
  }

  render() {
    return (
      <div>
        <div>List of students</div>
        {this.state.isLoading ? <div /> : <List records={this.props.records} />}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    records: state.student.entities
    // isLoading: state.students.isLoading
  };
}

export default connect(
  mapStateToProps,
  { getStudents }
)(StudentListPage);
