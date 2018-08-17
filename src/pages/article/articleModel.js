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
    *getData({ title }, { call, put }) {
      yield put({ type: "changeTitle", title });
      yield put({ type: "changeLoad", loading: true });
      const { data } = yield call(getContent, { title });
      yield put({ type: "changeContent", content: data.content });
      yield put({ type: "changeLoad", loading: false });
    }
  },
  reducers: {
    changeTitle: (state, { title }) => ({
      ...state,
      title
    }),
    changeLoad: (state, { loading }) => ({
      ...state,
      loading
    }),
    changeContent: (state, { content }) => ({
      ...state,
      content
    }),
    clear: () => ({
      ...init
    })
  }
};
