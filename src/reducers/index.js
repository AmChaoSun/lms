import { combineReducers } from "redux";
import users from "./user";
import courses from "./course";
import login from "./login";

export default combineReducers({
  login,
  users,
  courses
});
