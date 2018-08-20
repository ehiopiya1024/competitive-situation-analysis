import apis from "./articleApi";

const { getData, like, pullArticle } = apis;

export default {
  namespace: "article",
  state: {
    loading: false,
    data: [],
    likeResult: "0",
    showNumber: "0",
    total: "0",
    loadingPull: false,
    page: "0"
  },
  effects: {
    *getArticle({ payload }, { call, put }) {
      yield put({ type: "changeState", payload: true });
      const result = yield call(getData, { payload });
      const { data } = result;
      yield put({ type: "changeState", payload: false, data });
    },
    *like({ articleId, message, liked }, { call, put }) {
      const { data } = yield call(like, { articleId, liked });
      yield put({
        type: "likeCallBack",
        message,
        success: data,
        option: liked
      });
    },
    *pullArticle({ page }, { call, put }) {
      yield put({ type: "changePullState", loadingPull: true });
      const result = yield call(pullArticle, { page });
      const { data } = result;
      yield put({
        type: "changePullState",
        loadingPull: false,
        data
      });
    }
  },
  reducers: {
    changeState: (state, { payload, data }) => ({
      ...state,
      loading: payload,
      data
    }),
    likeCallBack: (state, { message, success, option }) => {
      let str;
      if (option) {
        str = "取消收藏";
      } else {
        str = "收藏";
      }

      if (success) {
        message.success(`${str}成功`);
      } else {
        message.error(`${str}失败！`);
      }
      return { ...state };
    },
    changePullState: (state, { loadingPull, data }) => {
      if (data) {
        const pre = state.data.concat(data);
        return {
          ...state,
          loadingPull,
          data: pre
        };
      }
      return {
        ...state,
        loadingPull
      };
    }
  }
};
