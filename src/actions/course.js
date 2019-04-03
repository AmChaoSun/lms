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

export function getLectures(params) {
  return async dispatch => {
    dispatch({
      type: "GET_LECTURERS_START"
    });

    try {
      const { data: users } = await axios.get(
        "http://studyhubapi.charles.technology/api/admin/users",
        {
          params: { ...params },
          headers: { Authorization: `Bearer ${localStorage.jwt}` }
        }
      );
      // raw data
      // const users = getRecords();
      dispatch({
        type: "GET_LECTURERS_SUCCEEDED",
        data: users
      });
    } catch (err) {
      if (err.request.status === 401) {
        localStorage.removeItem("jwt");
        window.location.reload();
      }
      dispatch({
        type: "GET_LECTURERS_FAILURE"
      });
    }
  };
}

export function createCourse(info) {
  return async dispatch => {
    dispatch({ type: "CREATE_COURSE_START" });
    try {
      //delete logic by id
      console.log(info);
      const { data } = await axios.post(
        "http://studyhubapi.charles.technology/api/admin/courses",
        info,
        { headers: { Authorization: `Bearer ${localStorage.jwt}` } }
      );
      dispatch({
        type: "CREATE_COURSE_SUCCEEDED",
        data: data
      });
    } catch (error) {
      if (error.request.status === 400) {
        alert(error.request.response);
      }
      if (error.request.status === 401) {
        localStorage.removeItem("jwt");
        window.location.reload();
      }
      dispatch({ type: "CREATE_COURSE_FAIL" });
    }
  };
}

export function updateCourse(info) {
  return async dispatch => {
    dispatch({ type: "UPDATE_COURSE_START" });

    try {
      //update logic by id
      const { data: course } = await axios.put(
        `http://studyhubapi.charles.technology/api/admin/courses/${
          info.courseId
        }`,
        info,
        { headers: { Authorization: `Bearer ${localStorage.jwt}` } }
      );
      dispatch({
        type: "UPDATE_COURSE_SUCCEEDED",
        data: course
      });
    } catch (error) {
      if (error.request.status === 400) {
        alert(error.request.response);
      }
      if (error.request.status === 401) {
        localStorage.removeItem("jwt");
        window.location.reload();
      }
      dispatch({ type: "UPDATE_COURSE_FAIL" });
    }
  };
}

export function deleteCourse(courseId) {
  return async dispatch => {
    dispatch({ type: "DELETE_COURSE_START" });
    try {
      //delete logic by id
      await axios.delete(
        `http://studyhubapi.charles.technology/api/admin/courses/${courseId}`,
        { headers: { Authorization: `Bearer ${localStorage.jwt}` } }
      );

      dispatch({
        type: "DELETE_COURSE_SUCCEEDED",
        data: courseId
      });
    } catch (error) {
      if (error.request.status === 400) {
        alert(error.request.response);
      }
      if (error.request.status === 401) {
        localStorage.removeItem("jwt");
        window.location.reload();
      }
      dispatch({ type: "DELETE_COURSE_FAIL" });
    }
  };
}
