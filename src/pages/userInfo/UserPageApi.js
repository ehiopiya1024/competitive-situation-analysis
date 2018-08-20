import { get, post } from "../../utils/request";

const getUserInfo = userId => get("/getUserInfo", userId);

const modifyUserInfo = user => post("/modifyUserInfo", user);

const modifyUserPassword = user => post("/modifyUserPassword", user);

export default {
  getUserInfo,
  modifyUserInfo,
  modifyUserPassword
};
