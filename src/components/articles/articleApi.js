import { get } from "../../utils/request";

const getData = payload => get("/getArticle", payload);

const like = articleId => get("/like", articleId);

export default { getData, like };
