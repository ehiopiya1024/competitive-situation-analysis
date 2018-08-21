import apis from "./UserPageApi";
import { skins } from "../../utils/skins.json";

const moment = require("moment");

const { getUserInfo, modifyUser } = apis;

const collectDataSort = collectDataOld => {
  const compare = (a, b) =>
    Date.parse(a.collectTime) - Date.parse(b.collectTime);
  collectDataOld.sort(compare);
  return collectDataOld;
};

const getCollectDataNew = collectDataOld => {
  const result = [];
  if (collectDataOld.length > 0) {
    const data = collectDataSort(collectDataOld);
    const temp = d => moment(d.collectTime).format("YYYY-MM-DD");

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
  }
  return result;
};

const defaultSkin = {
  topColor: "rgba(255,255,255,0.9)",
  leftColor: "rgba(255,255,255,0.9)"
};

export default {
  namespace: "userpage",
  state: {
    collectDataNew: [],
    user: {},
    skin: defaultSkin
  },
  // subscriptions: {
  //   setup({ dispatch, history }) {
  //     history.listen(location => {
  //       if (location.pathname.includes("/userpage")) {
  //         dispatch({
  //           type: "getData",
  //           user: { userId: location.pathname.split("/")[2] }
  //         });
  //       }
  //     });
  //   }
  // },
  effects: {
    *getData({ user }, { call, put }) {
      const { data, userObj } = yield call(getUserInfo, {
        userId: user.userId
      });
      yield put({ type: "changeState", data, userObj });
    },
    *modifyUserInfo({ user }, { call, put }) {
      const { data } = yield call(modifyUser, user);
      yield put({ type: "changeUserState", data });
    },
    *modifyUserPassword({ user }, { call, put }) {
      const { data } = yield call(modifyUser, user);
      yield put({ type: "changeUserState", data });
    }
  },

  reducers: {
    changeState: (state, { data, userObj }) => ({
      ...state,
      collectDataNew: getCollectDataNew(data),
      user: userObj,
      skin: skins[parseInt(userObj.skinsId, 10) - 1]
    }),
    changeUserState: (state, { data }) => ({
      ...state,
      user: data,
      skin: skins[parseInt(data.skinsId, 10) - 1]
    })
  }
};
