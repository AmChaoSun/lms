import React from "react";
import StudentDetailPage from "./StudentDetailPage";
import StudentListPage from "./StudentListPage";
import { Route } from "react-router-dom";

const StudentRoutePage = ({ location }) => {
  return (
    <div>
      {location.pathname === "/students" && <StudentListPage />}
      <Route path="/students/:id" component={StudentDetailPage} />
    </div>
  );
};

export default StudentRoutePage;
