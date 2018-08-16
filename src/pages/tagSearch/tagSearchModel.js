import apis from "./tagSearchApi";

const { getData } = apis;

export default {
  namespace: "tagSearch",
  state: {
    loading: false,
    asociatedTags: [],
    articles: []
  },
  effects: {
    *getData({ tagName }, { call, put }) {
      yield put({ type: "changeLoading", loading: true });
      const { data } = yield call(getData, { tagName });
      yield put({ type: "changeState", data });
      yield put({ type: "changeLoading", loading: false });
    }
  },
  reducers: {
    changeLoading: (state, { loading }) => ({
      ...state,
      loading
    }),
    changeState: (state, { data }) => ({
      ...state,
      articles: data
    })
  }
};
