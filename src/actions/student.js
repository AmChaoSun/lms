import faker from "faker";

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
export function getStudents() {
  return async dispatch => {
    dispatch({
      type: "GET_STUDENTS_START"
    });

    try {
      // const {data:studentsFromServer} = await axios.get('');
      // raw data
      const studentsFromServer = getRecords();

      dispatch({
        type: "GET_STUDENTS_SUCCEEDED",
        data: studentsFromServer.data
      });
    } catch (err) {
      dispatch({
        type: "GET_STUDENTS_FAILURE"
      });
    }
  };
}
