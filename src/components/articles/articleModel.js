import apis from "./articleApi";

const { getData, like } = apis;

const init = {
  loading: false,
  data: [],
  likeResult: "0",
  showNumber: "0",
  total: "0"
};

export default {
  namespace: "article",
  state: {
    ...init
  },
  effects: {
    *getArticle({ pageType, page }, { call, put }) {
      yield put({ type: "changeState" });
      const result = yield call(getData, { type: pageType, page });
      yield put({ type: "handleResult", result });
    },
    *like({ articleId, message, liked, collectTime, userId }, { call, put }) {
      const { errorCode } = yield call(like, {
        articleId,
        liked,
        collectTime,
        userId
      });
      yield put({
        type: "likeCallBack",
        message,
        success: errorCode,
        option: liked
      });
    }
  },
  reducers: {
    changeState: state => ({
      ...state,
      loading: true
    }),
    handleResult: (state, { result }) => {
      const { errorCode } = result;
      if (errorCode === 0) {
        const { showNumber, total, data } = result;
        return {
          ...state,
          showNumber,
          total,
          data: state.data.concat(data),
          loading: false
        };
      }
      return {
        ...state,
        loading: false
      };
    },
    likeCallBack: (state, { message, success, option }) => {
      const str = option ? "取消收藏" : "收藏";
      if (success === 0) {
        message.success(`${str}成功`);
      } else {
        message.error(`${str}失败！`);
      }
      return { ...state };
    },
    clear: () => ({
      ...init
    })
  }
};
