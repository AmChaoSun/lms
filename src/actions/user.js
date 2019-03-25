import faker from "faker";
// import axios from "axios";

// fake records
const getRecords = () => {
  const records = [];

  for (let i = 0; i < 40; i++) {
    const record = {
      id: faker.random.number(),
      nickName: faker.name.findName(),
      role: faker.random.boolean(),
      isActive: faker.random.boolean(),
      email: faker.internet.email(),
      mobile: faker.phone.phoneNumber()
    };
    records.push(record);
  }

  return records;
};
export function getUsers() {
  return async dispatch => {
    dispatch({
      type: "GET_USERS_START"
    });

    try {
      // const { data: users } = await axios.get(
      //   "http://studyhubapi.charles.technology/api/admin/users",
      //   { headers: { Authorization: `Bearer ${localStorage.jwt}` } }
      // );
      // raw data
      const users = getRecords();
      dispatch({
        type: "GET_USERS_SUCCEEDED",
        data: { users: users }
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

export function createUser(info) {
  return async dispatch => {
    dispatch({ type: "CREATE_USER_START" });
    try {
      //delete logic by id
      console.log(`create user`);
      console.log(info);
      dispatch({ type: "CREATE_USER_SUCCEEDED" });
    } catch (error) {
      dispatch({ type: "CREATE_USER_FAIL" });
    }
  };
}

export function deleteUser(id) {
  return async dispatch => {
    dispatch({ type: "DELETE_USER_START" });
    try {
      //delete logic by id
      console.log(`delete user ${id}`);
      dispatch({ type: "DELETE_USER_SUCCEEDED" });
    } catch (error) {
      dispatch({ type: "DELETE_USER_FAIL" });
    }
  };
}

export function updateUser(info) {
  return async dispatch => {
    dispatch({ type: "UPDATE_USER_START" });

    try {
      //update logic by id
      console.log(info);
      dispatch({ type: "UPDATE_USER_SUCCEEDED" });
    } catch (error) {
      dispatch({ type: "UPDATE_USER_FAIL" });
    }
  };
}
