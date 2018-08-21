import { get } from "../../utils/request";

const getData = requierments => get("/search", requierments);

export default { getData };
