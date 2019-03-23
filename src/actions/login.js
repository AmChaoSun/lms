import axios from "axios";

export function login(values) {
  return async dispatch => {
    dispatch({
      type: "TRY_LOGIN",
      data: { tryLogin: true }
    });
    try {
      //some logic here
      const { data: token } = await axios.post(
        "http://studyhubapi.charles.technology/api/admins/token",
        {
          UserName: values.userName,
          Password: values.password
        }
      );
      console.log(token);
      localStorage.setItem("jwt", token);
      dispatch({
        type: "LOGIN_SUCCEED",
        data: { tryLogin: false }
      });
    } catch (err) {
      dispatch({
        type: "LOGIN_FAIL",
        data: { tryLogin: false }
      });
    }
  };
}
