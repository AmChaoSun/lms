const necessaryKeys = {
  courseId: "courseId",
  name: "name",
  lecturer: "lecturer",
  description: "description"
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
      const cleanData = data.map(record => {
        let processedRecord = {};
        processedRecord["key"] = record.courseId;
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
      return state;
    case "GET_LECTURERS_SUCCEEDED": {
      const { data } = action;
      const cleanData = data.users.map(record => {
        let processedRecord = {};
        processedRecord["key"] = record.courseId;
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
      return state;

    //create users
    case "CREATE_COURSE_START":
      return state;
    case "CREATE_COURSE_SUCCEEDED": {
      const { data } = action;
      //copy courses
      let cleanData = [...state.records];

      //data transform
      let processedRecord = {};
      processedRecord["key"] = data.courseId;
      Object.entries(data).forEach(([key, value]) => {
        if (key === "lecturer") {
          processedRecord[necessaryKeys[key]] = value.name;
        } else if (necessaryKeys[key]) {
          processedRecord[necessaryKeys[key]] = value;
        }
      });

      //insert
      cleanData.push(processedRecord);

      return {
        ...state,
        records: cleanData
      };
    }
    case "CREATE_COURSE_FAILURE":
      return state;

    //update users
    case "UPDATE_COURSE_START":
      return state;
    case "UPDATE_COURSE_SUCCEEDED": {
      const { data } = action;
      //copy users
      let cleanData = [...state.records];

      //data transform
      let processedRecord = {};
      processedRecord["key"] = data.courseId;
      Object.entries(data).forEach(([key, value]) => {
        if (key === "lecturer") {
          processedRecord[necessaryKeys[key]] = value.name;
        } else if (necessaryKeys[key]) {
          processedRecord[necessaryKeys[key]] = value;
        }
      });

      //insert
      let index = cleanData.findIndex(
        ({ courseId }) => courseId === processedRecord.courseId
      );

      if (index === -1) {
        cleanData.push(processedRecord);
      } else {
        cleanData[index] = processedRecord;
      }

      return {
        ...state,
        records: cleanData,
        entity: processedRecord
      };
    }
    case "UPDATE_COURSE_FAILURE":
      return state;

    //delete users
    case "DELETE_COURSE_START":
      return { ...state };
    case "DELETE_COURSE_SUCCEEDED": {
      const { data } = action;
      //copy users
      let cleanData = [...state.records];
      console.log(data);
      //find index
      let index = cleanData.findIndex(({ courseId }) => courseId === data);

      //remove record
      if (index !== -1) {
        cleanData.splice(index, 1);
      }

      return {
        ...state,
        records: cleanData
      };
    }
    case "DELETE_COURSE_FAILURE":
      return { ...state };

    default:
      return state;
  }
};

export default courses;
