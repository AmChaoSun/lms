import faker from "faker";
import axios from "axios";

const getRecords = () => {
  const records = [];

  for (let i = 0; i < 40; i++) {
    const record = {
      id: faker.random.number(),
      nickName: faker.name.findName(),
      role: faker.random.boolean(),
      isActive: faker.random.boolean()
    };
    records.push(record);
  }

  return {
    data: records
  };
};
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
      dispatch({
        type: "GET_USERS_FAILURE"
      });
    }
  };
}
