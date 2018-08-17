import apis from "./searchApi";

const { getData } = apis;

const init = {
  loading: false,
  data: []
};

export default {
  namespace: "search",
  state: {
    ...init
  },
  effects: {
    *getData({ requirements }, { call, put }) {
      yield put({ type: "changeLoad", loading: true });
      const { data } = yield call(getData, { requirements });
      yield put({ type: "changeData", data });
      yield put({ type: "changeLoad", loading: false });
    }
  },
  reducers: {
    changeLoad: (state, { loading }) => ({
      ...state,
      loading
    }),
    changeData: (state, { data }) => ({
      ...state,
      data
    }),
    clear: () => ({
      ...init
    })
  }
};
