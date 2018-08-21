import { get } from "../../utils/request";

const getData = payload => get("/getArticle", payload);

const like = data => get("/like", data);

export default { getData, like };
