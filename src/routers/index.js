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
        <Route path="/login" component={LoginPage} />
        <Route exact path="/" component={LoginPage} />
        <PrivateRoute path="/home" component={HomePage} />
        <PrivateRoute path="/students" component={StudentRoutePage} />
        <PrivateRoute path="/courses" component={CourseRoutePage} />
        <PrivateRoute path="/lecturers" component={LecturerListPage} />
        <PrivateRoute component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
};
export default Router;
