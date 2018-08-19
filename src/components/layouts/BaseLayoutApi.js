import { get } from "../../utils/request";

const getSkins = () => get("/getSkins");

export default {
  getSkins
};
