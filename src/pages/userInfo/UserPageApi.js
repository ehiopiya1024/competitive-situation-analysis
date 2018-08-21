import { get } from "../../utils/request";

const getUserInfo = userId => get("/getUserInfo", userId);

const modifyUser = user => get("/modifyUser", user);

export default {
  getUserInfo,
  modifyUser
};
