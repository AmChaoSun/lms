import React from "react";
import UserDetailPage from "./UserDetailPage";
import UserListPage from "./UserListPage";
import { Route } from "react-router-dom";

const UserRoutePage = ({ location }) => {
  return (
    <div>
      {location.pathname === "/users" && <UserListPage />}
      <Route path="/users/:id" component={UserDetailPage} />
    </div>
  );
};

export default UserRoutePage;
