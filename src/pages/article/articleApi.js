import { get } from "../../utils/request";

const getContent = title => get("/articleCotent", title);

export default { getContent };
