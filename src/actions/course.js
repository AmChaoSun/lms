import axios from "axios";

export function getCourses() {
  return async dispatch => {
    dispatch({ type: "GET_COURSES_START" });
    try {
      const { data: courses } = await axios.get(
        "http://studyhubapi.charles.technology/api/admin/courses",
        { headers: { Authorization: `Bearer ${localStorage.jwt}` } }
      );
      dispatch({
        type: "GET_COURSES_SUCCEEDED",
        data: courses
      });
    } catch (err) {
      if (err.request.status === 401) {
        localStorage.removeItem("jwt");
        window.location.reload();
      }
      dispatch({
        type: "GET_COURSES_FAILURE"
      });
    }
  };
}
