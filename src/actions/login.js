export function login(values) {
  return async dispatch => {
    dispatch({
      type: "TRY_LOGIN",
      data: { tryLogin: true }
    });
    try {
      //some logic here
      localStorage.setItem("jwt", "123");
      dispatch({
        type: "LOGIN_SUCCEED",
        data: { tryLogin: false }
      });
    } catch (err) {
      dispatch({
        type: "LOGIN_FAILURE",
        data: { tryLogin: false }
      });
    }
  };
}
