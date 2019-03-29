const necessaryKeys = {
  courseId: "courseId",
  name: "name",
  lecturer: "lecturer"
};

const courses = (state = { records: [], isLoading: false }, action) => {
  switch (action.type) {
    case "GET_COURSES_START":
      return { ...state, isLoading: true };
    case "GET_COURSES_SUCCEEDED": {
      const { data } = action;
      const cleanData = data.map((record, index) => {
        let processedRecord = {};
        processedRecord["key"] = index;
        Object.entries(record).forEach(([key, value]) => {
          if (key === "lecturer") {
            processedRecord[necessaryKeys[key]] = value.name;
          } else if (necessaryKeys[key]) {
            processedRecord[necessaryKeys[key]] = value;
          }
        });
        return processedRecord;
      });
      return {
        ...state,
        records: cleanData,
        isLoading: false
      };
    }
    case "GET_COURSES_FAILURE":
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export default courses;
