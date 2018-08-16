import { get } from "../../utils/request";

const getData = payload => get("/getArticle", payload);

export default { getData };
