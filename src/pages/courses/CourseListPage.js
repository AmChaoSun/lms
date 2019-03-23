import React from "react";
import { connect } from "react-redux";
import { getCourses } from "../../actions";
// import MyList from "../HomePage";
class CourseListPage extends React.Component {
  state = {
    isLoading: true
  };

  componentDidMount() {
    this.props.getCourses();
  }

  render() {
    // return <MyList />;
    return <div>list of courses</div>;
  }
}

function mapStateToProps(state) {
  return {
    records: state.course
    // isLoading: state.students.isLoading
  };
}

export default connect(
  mapStateToProps,
  { getCourses }
)(CourseListPage);
