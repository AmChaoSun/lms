import { Route, BrowserRouter, Switch } from "react-router-dom";
import React from "react";
import PrivateRoute from "./PrivateRoute";
import {
  StudentListPage,
  CourseListPage,
  LecturerListPage,
  HomePage,
  LoginPage,
  PageNotFound
} from "../pages";

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
