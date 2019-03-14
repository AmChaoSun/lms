import React from "react";
import CourseDetailPage from "./CourseDetailPage";
import CourseListPage from "./CourseListPage";
import { Route } from "react-router-dom";

const CourseRoutePage = ({ location }) => {
  return (
    <div>
      {location.pathname === "/courses" && <CourseListPage />}
      <Route path="/courses/:id" component={CourseDetailPage} />
    </div>
  );
};

export default CourseRoutePage;
