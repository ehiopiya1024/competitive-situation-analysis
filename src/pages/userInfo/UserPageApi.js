import { get } from "../../utils/request";

const getUserInfo = userId => get("/getUserInfo", userId);

const modifyUserInfo = user => get("/modifyUserInfo", user);

const modifyUserPassword = user => get("/modifyUserPassword", user);

export default {
  getUserInfo,
  modifyUserInfo,
  modifyUserPassword
};
