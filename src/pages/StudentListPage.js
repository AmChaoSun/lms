import React from "react";
import StudentDetailPage from "./StudentDetailPage";
import { Route } from "react-router-dom";

const StudentListPage = ({ location }) => {
  return (
    <div>
      {location.pathname === "/students" && <div>List of Students</div>}
      <Route path="/students/:id" component={StudentDetailPage} />
    </div>
  );
};

export default StudentListPage;
