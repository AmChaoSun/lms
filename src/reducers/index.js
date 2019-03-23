import { combineReducers } from "redux";
import user from "./user";
import students from "./student";
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
  user,
  students,
  courses
  // course
});
