import React from "react";
import CourseDetailPage from "./CourseDetailPage";
import Route from "react-router-dom";

const CourseListPage = ({ location }) => {
  return (
    <div>
      {location.pathname === "/Courses" && <div>List of Courses</div>}
      <Route path="/Courses/:id" component={CourseDetailPage} />
    </div>
  );
};

export default CourseListPage;
