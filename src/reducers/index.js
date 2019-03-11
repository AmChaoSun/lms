import { combineReducers } from "redux";
import user from "./user";
import students from "./student";

const student = combineReducers({
  entities: students
});
export default combineReducers({
  user,
  student
});
