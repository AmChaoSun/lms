// import faker from "faker";
import axios from "axios";

// fake records
// const getRecords = () => {
//   const records = [];

//   for (let i = 0; i < 40; i++) {
//     const record = {
//       id: faker.random.number(),
//       nickName: faker.name.findName(),
//       role: faker.random.boolean(),
//       isActive: faker.random.boolean(),
//       email: faker.internet.email(),
//       mobile: faker.phone.phoneNumber()
//     };
//     records.push(record);
//   }

//   return records;
// };
export function getUsers() {
  return async dispatch => {
    dispatch({
      type: "GET_USERS_START"
    });

    try {
      const { data: users } = await axios.get(
        "http://studyhubapi.charles.technology/api/admin/users",
        { headers: { Authorization: `Bearer ${localStorage.jwt}` } }
      );
      // raw data
      // const users = getRecords();
      dispatch({
        type: "GET_USERS_SUCCEEDED",
        data: users
      });
    } catch (err) {
      if (err.request.status === 401) {
        localStorage.removeItem("jwt");
        window.location.reload();
      }
      dispatch({
        type: "GET_USERS_FAILURE"
      });
    }
  };
}

export function getUserById(id) {
  return async dispatch => {
    dispatch({
      type: "GET_USER_START"
    });

    try {
      //get user detail
      const { data: user } = await axios.get(
        `http://studyhubapi.charles.technology/api/admin/users/${id}`,
        {
          headers: { Authorization: `Bearer ${localStorage.jwt}` }
        }
      );

      const { data: courses } = await axios.get(
        `http://studyhubapi.charles.technology/api/admin/enrolls/students/${id}`,
        {
          headers: { Authorization: `Bearer ${localStorage.jwt}` }
        }
      );
      user.courses = courses;
      dispatch({
        type: "GET_USER_SUCCEEDED",
        data: user
      });

      // raw data
      // const users = getRecords();
    } catch (err) {
      console.log(err);
      //unauthorized
      if (err.request.status === 401) {
        localStorage.removeItem("jwt");
        window.location.reload();
      }
      //user not found
      if (err.request.response === "User not Found") {
        window.location = "/users";
      }
      dispatch({
        type: "GET_USER_FAILURE"
      });
    }
  };
}

export function createUser(info) {
  return async dispatch => {
    dispatch({ type: "CREATE_USER_START" });
    try {
      //delete logic by id
      const { data: user } = await axios.post(
        "http://studyhubapi.charles.technology/api/admins/users",
        info,
        { headers: { Authorization: `Bearer ${localStorage.jwt}` } }
      );
      dispatch({
        type: "CREATE_USER_SUCCEEDED",
        data: user
      });
    } catch (error) {
      if (error.request.status === 400) {
        alert(error.request.response);
      }
      if (error.request.status === 401) {
        localStorage.removeItem("jwt");
        window.location.reload();
      }
      dispatch({ type: "CREATE_USER_FAIL" });
    }
  };
}

export function deleteUser(id) {
  return async dispatch => {
    dispatch({ type: "DELETE_USER_START" });
    try {
      //delete logic by id
      await axios.delete(
        `http://studyhubapi.charles.technology/api/admin/users/${id}`,
        { headers: { Authorization: `Bearer ${localStorage.jwt}` } }
      );

      dispatch({
        type: "DELETE_USER_SUCCEEDED",
        data: id
      });
    } catch (error) {
      if (error.request.status === 400) {
        alert(error.request.response);
      }
      if (error.request.status === 401) {
        localStorage.removeItem("jwt");
        window.location.reload();
      }
      dispatch({ type: "DELETE_USER_FAIL" });
    }
  };
}

export function updateUser(info) {
  return async dispatch => {
    dispatch({ type: "UPDATE_USER_START" });

    try {
      //update logic by id
      const { data: user } = await axios.put(
        `http://studyhubapi.charles.technology/api/admin/users/${info.id}`,
        info,
        { headers: { Authorization: `Bearer ${localStorage.jwt}` } }
      );
      dispatch({
        type: "UPDATE_USER_SUCCEEDED",
        data: user
      });
    } catch (error) {
      if (error.request.status === 400) {
        alert(error.request.response);
      }
      if (error.request.status === 401) {
        localStorage.removeItem("jwt");
        window.location.reload();
      }
      dispatch({ type: "UPDATE_USER_FAIL" });
    }
  };
}

export function dropCourse(id) {
  return async dispatch => {
    dispatch({ type: "DROP_COURSE_START" });
    try {
      //delete logic by id
      console.log(`drop course`);
      console.log(id);
      dispatch({ type: "DROP_COURSE_SUCCEEDED" });
    } catch (error) {
      dispatch({ type: "DROP_COURSE_FAIL" });
    }
  };
}

export function enrollCourse(id) {
  return async dispatch => {
    dispatch({ type: "Enroll_COURSE_START" });
    try {
      //delete logic by id
      console.log(`enroll course`);
      console.log(id);
      dispatch({ type: "Enroll_COURSE_SUCCEEDED" });
    } catch (error) {
      dispatch({ type: "Enroll_COURSE_FAIL" });
    }
  };
}
