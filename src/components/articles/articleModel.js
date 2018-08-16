import apis from "./articleApi";

const { getData } = apis;

export default {
  namespace: "article",
  state: {
    loading: false,
    data: []
  },
  effects: {
    *getArticle({ payload }, { call, put }) {
      yield put({ type: "changeState", payload: true });
      const result = yield call(getData, { payload });
      const { data } = result;
      yield put({ type: "changeState", payload: false, data });
    }
  },
  reducers: {
    changeState: (state, { payload, data }) => ({
      ...state,
      loading: payload,
      data
    })
  }
};
