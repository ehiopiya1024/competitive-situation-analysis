import { get } from "../../utils/request";

const getData = requierments => get("/search", requierments);

const pullData = page => get("/searchPullData", page);

export default { getData, pullData };
