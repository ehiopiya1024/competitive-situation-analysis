import { post } from "../../utils/request";

const postUserLogin = user => post("/postUserLogin", user);

export default {
  postUserLogin
};
