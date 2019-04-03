const necessaryKeys = {
  courseId: "courseId",
  name: "name",
  lecturer: "lecturer"
};

const lecturerKeys = {
  id: "id",
  nickName: "nickName"
};

const courses = (
  state = { records: [], lecturers: [], isLoading: false },
  action
) => {
  switch (action.type) {
    //get courses
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

    //get lectures
    case "GET_LECTURERS_START":
      return { ...state };
    case "GET_LECTURERS_SUCCEEDED": {
      const { data } = action;
      const cleanData = data.users.map(record => {
        let processedRecord = {};
        processedRecord["key"] = record.id;
        Object.entries(record).forEach(([key, value]) => {
          if (lecturerKeys[key]) {
            processedRecord[lecturerKeys[key]] = value;
          }
        });
        return processedRecord;
      });
      return {
        ...state,
        lecturers: cleanData
      };
    }
    case "GET_LECTURERS_FAILURE":
      return { ...state };
    default:
      return state;
  }
};

export default courses;
