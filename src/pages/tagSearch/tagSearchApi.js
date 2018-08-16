import { get } from "../../utils/request";

const getData = tagName => get("/getTagData", { tagName });

export default { getData };
