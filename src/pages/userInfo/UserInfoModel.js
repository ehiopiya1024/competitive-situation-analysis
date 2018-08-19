import apis from "./UserPageApi";

const moment = require("moment");

const { getUserInfo } = apis;

const collectDataSort = collectDataOld => {
  const compare = (a, b) =>
    Date.parse(a.collectTime) - Date.parse(b.collectTime);
  collectDataOld.sort(compare);
  return collectDataOld;
};

const getCollectDataNew = collectDataOld => {
  const data = collectDataSort(collectDataOld);
  const temp = d => moment(d.collectTime).format("YYYY-MM-DD");
  const result = [];
  let articles = [];
  let node = {};
  node.articles = articles;
  for (let i = 0; i < data.length - 1; i += 1) {
    const article = [];
    article.title = data[i].title;
    article.collectTime = moment(data[i].collectTime).format(
      "YYYY-MM-DD HH:mm:ss"
    );
    article.content = data[i].content;
    articles.push(article);
    if (temp(data[i]) !== temp(data[i + 1])) {
      node.date = temp(data[i]);
      node.articles = articles;
      result.push(node);
      articles = [];
      node = {};
    }
  }
  if (articles !== []) {
    node.date = temp(data[data.length - 2]);
    node.articles = articles;
    result.push(node);
    node = {};
  }
  const article = {};
  article.title = data[data.length - 1].title;
  article.collectTime = moment(data[data.length - 1].collectTime).format(
    "YYYY-MM-DD HH:mm:ss"
  );
  article.content = data[data.length - 1].content;
  node.articles = [];
  if (temp(data[data.length - 1]) !== temp(data[data.length - 2])) {
    node.date = temp(data[data.length - 1]);
    node.articles.push(article);
    result.push(node);
  } else {
    result[result.length - 1].articles.push(article);
  }
  return result;
};

export default {
  namespace: "userpage",
  state: {
    collectDataNew: [],
    user: {}
  },

  effects: {
    *getData({ user }, { call, put }) {
      const { data, userObj } = yield call(getUserInfo, user.userId);
      yield put({ type: "changeState", data, userObj });
    }
  },

  reducers: {
    changeState: (state, { data, userObj }) => ({
      ...state,
      collectDataNew: getCollectDataNew(data),
      user: userObj
    })
  }
};
