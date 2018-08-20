import { get } from "../../utils/request";

const getData = payload => get("/getArticle", payload);

const like = articleId => get("/like", articleId);

const pullArticle = page => get("/pullArticle", page);

export default { getData, like, pullArticle };
