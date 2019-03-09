export function changeUserName({ userName }) {
  return {
    type: "CHANGE_USER_NAME", //compulsory key!
    userName
  };
}
