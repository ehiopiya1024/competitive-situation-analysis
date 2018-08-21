import apis from "./articleApi";

const { getContent } = apis;

const init = {
  loading: false,
  title: "",
  content: ""
};

export default {
  namespace: "articleContent",
  state: {
    ...init
  },
  effects: {
    *getData({ title, id }, { call, put }) {
      yield put({ type: "changeState", title, loading: true });
      yield put({ type: "changeLoad", loading: true });
      const result = yield call(getContent, { id });
      yield put({ type: "handleResult", result });
      yield put({ type: "changeState", title, loading: false });
    }
  },
  reducers: {
    changeState: (state, { title, loading }) => ({
      ...state,
      title,
      loading
    }),
    handleResult: (state, { result }) => {
      const { errorCode } = result;
      const content =
        errorCode === 0 ? result.content : "未知错误，拉取内容失败";
      return {
        ...state,
        content
      };
    },
    clear: () => ({
      ...init
    })
  }
};
