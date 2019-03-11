export function getStudents() {
  return async dispatch => {
    dispatch({
      type: "GET_STUDENTS_START"
    });

    try {
      // const {data:studentsFromServer} = await axios.get('');
      // raw data
      const studentsFromServer = [
        {
          id: "123",
          _createdAt: "2019-02-02",
          _updatedAt: "2019-03-03",
          firstName: "san",
          lastName: "zhang"
        },
        {
          id: "123",
          _createdAt: "2019-02-02",
          _updatedAt: "2019-03-03",
          firstName: "si",
          lastName: "li"
        },
        {
          id: "123",
          _createdAt: "2019-02-02",
          _updatedAt: "2019-03-03",
          firstName: "ermazi",
          lastName: "wang"
        }
      ];

      dispatch({
        type: "GET_STUDENTS_SUCCEEDED",
        data: studentsFromServer
      });
    } catch (err) {
      dispatch({
        type: "GET_STUDENTS_FAILURE"
      });
    }
  };
}
