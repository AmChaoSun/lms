import React from "react";
import { connect } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import List from "../../components/List";
import { getCourses } from "../../actions";

class CourseListPage extends React.Component {
  state = {
    isLoading: true
  };

  componentDidMount() {
    this.props.getCourses();
  }

  render() {
    return (
      <div>
        <div>List of courses</div>
        {this.state.isLoading ? (
          <CircularProgress />
        ) : (
          <List records={this.props.records} />
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    records: state.course.entities
    // isLoading: state.students.isLoading
  };
}

export default connect(
  mapStateToProps,
  { getCourses }
)(CourseListPage);