import { get } from "../../utils/request";

const getContent = id => get("/articleCotent", id);

export default { getContent };
