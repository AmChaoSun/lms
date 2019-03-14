import { combineReducers } from "redux";
import user from "./user";
import students from "./student";
import courses from "./course";

const student = combineReducers({
  entities: students
});

const course = combineReducers({
  entities: courses
});
export default combineReducers({
  user,
  student,
  course
});
