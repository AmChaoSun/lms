import { combineReducers } from "redux";
import users from "./user";
import courses from "./course";
import login from "./login";

// const student = combineReducers({
//   ...students
// });

// const course = combineReducers({
//   ...courses
// });

export default combineReducers({
  login,
  users,
  courses
});
