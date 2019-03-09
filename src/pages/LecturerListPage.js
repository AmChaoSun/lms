import React from "react";
import LecturerDetailPage from "./LecturerDetailPage";
import Route from "react-router-dom";

const LecturerListPage = ({ location }) => {
  return (
    <div>
      {location.pathname === "/lecturers" && <div>List of Lecturers</div>}
      <Route path="/lecturers/:id" component={LecturerDetailPage} />
    </div>
  );
};

export default LecturerListPage;
