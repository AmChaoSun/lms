export function getCourses() {
  return async dispatch => {
    dispatch({ type: "GET_COURSES_START" });

    try {
      // const {data:COURSESFromServer} = await axios.get('');
      // raw data
      const coursesFromServer = [
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
        type: "GET_COURSES_SUCCEEDED",
        data: coursesFromServer
      });
    } catch (err) {
      dispatch({
        type: "GET_COURSES_FAILURE"
      });
    }
  };
}
