import React from "react";
import CourseDetailPage from "./CourseDetailPage";
import { Route } from "react-router-dom";

const CourseListPage = ({ location }) => {
  return (
    <div>
      {location.pathname === "/courses" && <div>List of Courses</div>}
      <Route path="/courses/:id" component={CourseDetailPage} />
    </div>
  );
};

export default CourseListPage;
