const necessaryKeys = {
  id: "id",
  nickName: "nickName",
  role: "role",
  isActive: "isActive"
};

const students = (state = { students: [] }, action) => {
  switch (action.type) {
    case "GET_STUDENTS_SUCCEEDED": {
      const { data } = action;
      const cleanData = data.map((record, index) => {
        let processedRecord = {};
        processedRecord["key"] = index;
        Object.entries(record).forEach(([key, value]) => {
          if (necessaryKeys[key]) processedRecord[necessaryKeys[key]] = value;
        });
        return processedRecord;
      });
      return {
        ...state,
        students: cleanData
      };
    }
    default:
      return state;
  }
};

export default students;
