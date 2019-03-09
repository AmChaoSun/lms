import { Route, BrowserRouter, Switch } from "react-router-dom";
import React from "react";
import PrivateRoute from "./PrivateRoute";
import StudentListPage from "../pages/StudentListPage";
import CourseListPage from "../pages/CourseListPage";
import LecturerListPage from "../pages/LecturerListPage";
import HomePage from "../pages/HomePage";
import PageNotFound from "../pages/PageNotFound";
import LoginPage from "../pages/LoginPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <PrivateRoute path="/students" component={StudentListPage} />
        <PrivateRoute path="/courses" component={CourseListPage} />
        <PrivateRoute path="/lecturers" component={LecturerListPage} />
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
};
export default Router;
