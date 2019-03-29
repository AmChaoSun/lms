const necessaryKeys = {
  id: "id",
  nickName: "nickName",
  role: "role",
  isActive: "isActive",
  email: "email",
  mobile: "mobile"
};

const users = (
  state = { records: new Map(), entity: {}, isLoading: false },
  action
) => {
  switch (action.type) {
    //get users
    case "GET_USERS_START":
      return { ...state, isLoading: true };
    case "GET_USERS_SUCCEEDED": {
      const { data } = action;
      let cleanData = new Map();
      //data contains pagesize and else, here pick users out first
      data.users.map(record => {
        let processedRecord = {};
        processedRecord["key"] = record.id;
        Object.entries(record).forEach(([key, value]) => {
          if (key === "isActive") {
            value = value.toString();
          }
          if (necessaryKeys[key]) processedRecord[necessaryKeys[key]] = value;
        });
        cleanData.set(record.id, processedRecord);
        return processedRecord;
      });
      return {
        ...state,
        records: cleanData,
        isLoading: false
      };
    }
    case "GET_USERS_FAILURE":
      return { ...state, isLoading: false };

    //get user by id
    case "GET_USER_START":
      return { ...state, isLoading: true };
    case "GET_USER_SUCCEEDED": {
      const { data } = action;
      //data contains pagesize and else, here pick users out first
      //get the user
      let processedRecord = {};
      Object.entries(data).forEach(([key, value]) => {
        if (key === "isActive") {
          value = value.toString();
        }
        if (necessaryKeys[key]) processedRecord[necessaryKeys[key]] = value;
      });
      let courses = [];
      data.courses.map(record => {
        record.lecturer = record.lecturer.name;
        record.key = record.courseId;
        courses.push(record);
        return null;
      });
      processedRecord["courses"] = courses;
      return {
        ...state,
        entity: processedRecord,
        isLoading: false
      };
    }
    case "GET_USER_FAILURE":
      return { ...state, isLoading: false };

    //create users
    case "CREATE_USER_START":
      return { ...state };
    case "CREATE_USER_SUCCEEDED": {
      const { data } = action;
      //copy users
      let cleanData = new Map(state.records);

      //data transform
      let processedRecord = {};
      processedRecord["key"] = data.id;
      Object.entries(data).forEach(([key, value]) => {
        if (key === "isActive") {
          value = value.toString();
        }
        if (necessaryKeys[key]) processedRecord[necessaryKeys[key]] = value;
      });

      //insert
      cleanData.set(data.id, processedRecord);

      return {
        ...state,
        records: cleanData
      };
    }
    case "CREATE_USER_FAILURE":
      return { ...state };

    //update users
    case "UPDATE_USER_START":
      return { ...state };
    case "UPDATE_USER_SUCCEEDED": {
      const { data } = action;
      //copy users
      let cleanData = new Map(state.records);

      //data transform
      let processedRecord = {};
      processedRecord["key"] = data.id;
      Object.entries(data).forEach(([key, value]) => {
        if (key === "isActive") {
          value = value.toString();
        }
        if (necessaryKeys[key]) processedRecord[necessaryKeys[key]] = value;
      });

      //insert
      cleanData.set(data.id, processedRecord);
      return {
        ...state,
        records: cleanData
      };
    }
    case "UPDATE_USER_FAILURE":
      return { ...state };

    //delete users
    case "DELETE_USER_START":
      return { ...state };
    case "DELETE_USER_SUCCEEDED": {
      const { data } = action;
      //copy users
      let cleanData = new Map(state.records);

      //remove record
      cleanData.delete(data);

      return {
        ...state,
        records: cleanData
      };
    }
    case "DELETE_USER_FAILURE":
      return { ...state };

    default:
      return state;
  }
};

export default users;
