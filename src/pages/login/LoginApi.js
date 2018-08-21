import { get } from "../../utils/request";

const userLogin = user => get("/userLogin", user);

export default {
  userLogin
};
