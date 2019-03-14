const necessaryKeys = {
  id: "ID",
  firstName: "First Name",
  lastName: "Last Name"
};

const courses = (state = { courses: [] }, action) => {
  switch (action.type) {
    case "GET_COURSES_SUCCEEDED": {
      const { data } = action;
      const cleanData = data.map(record => {
        let processedRecord = {};

        Object.entries(record).forEach(([key, value]) => {
          if (necessaryKeys[key]) processedRecord[necessaryKeys[key]] = value;
        });
        return processedRecord;
      });
      return {
        ...state,
        courses: cleanData
      };
    }
    default:
      return state;
  }
};

export default courses;
