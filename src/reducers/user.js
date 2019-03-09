export const user = (state = {}, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...state,
        status: "signed_in"
      };
    default:
      return state;
  }
};
export default user;
