import React from "react";
import StudentDetailPage from "./StudentDetailPage";
import Route from "react-router-dom";

const StudentListPage = ({ location }) => {
  return (
    <div>
      {location.pathname === "/Students" && <div>List of Students</div>}
      <Route path="/Students/:id" component={StudentDetailPage} />
    </div>
  );
};

export default StudentListPage;
