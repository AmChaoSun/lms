import { Route, BrowserRouter, Switch } from "react-router-dom";
import React from "react";
import PrivateRoute from "./PrivateRoute";
import StudentRoutePage from "../pages/students/StudentRoutePage";
import CourseRoutePage from "../pages/courses/CourseRoutePage";
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
        <Route path="/students" component={StudentRoutePage} />
        <PrivateRoute path="/courses" component={CourseRoutePage} />
        <PrivateRoute path="/lecturers" component={LecturerListPage} />
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
};
export default Router;
