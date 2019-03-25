const necessaryKeys = {
  id: "id",
  nickName: "nickName",
  role: "role",
  isActive: "isActive",
  email: "email",
  mobile: "mobile"
};

const users = (state = { records: [], isLoading: false }, action) => {
  switch (action.type) {
    case "GET_USERS_START":
      return { ...state, isLoading: true };
    case "GET_USERS_SUCCEEDED": {
      const { data } = action;
      //data contains pagesize and else, here pick users out first
      const cleanData = data.users.map((record, index) => {
        let processedRecord = {};
        processedRecord["key"] = index;
        Object.entries(record).forEach(([key, value]) => {
          if (necessaryKeys[key])
            processedRecord[necessaryKeys[key]] = value.toString();
        });
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
    default:
      return state;
  }
};

export default users;
