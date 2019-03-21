const login = (state = { tryLogin: false }, action) => {
  switch (action.type) {
    case "TRY_LOGIN": {
      const { data } = action;
      return { ...state, ...data };
    }
    case "LOGIN_SUCCEED": {
      const { data } = action;

      return { ...state, ...data };
    }
    case "LOGIN_FAIL": {
      const { data } = action;

      return { ...state, ...data };
    }
    default:
      return state;
  }
};

export default login;
