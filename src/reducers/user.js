const necessaryKeys = {
  id: "id",
  nickName: "nickName",
  role: "role",
  isActive: "isActive",
  email: "email",
  mobile: "mobile"
};

const users = (state = { isLoading: false }, action) => {
  if (!state.records) {
    state.records = new Map();
  }
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
      processedRecord["key"] = data.id;
      Object.entries(data).forEach(([key, value]) => {
        if (key === "isActive") {
          value = value.toString();
        }
        if (necessaryKeys[key]) processedRecord[necessaryKeys[key]] = value;
      });

      //insert into records

      state.records.set(data.id, processedRecord);
      return {
        ...state,
        isLoading: false
      };
    }
    case "GET_USER_FAILURE":
      return { ...state, isLoading: false };

    default:
      return state;
  }
};

export default users;
