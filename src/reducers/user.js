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

      return {
        ...state,
        entity: processedRecord,
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
