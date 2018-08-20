import apis from "./searchApi";

const { getData, pullData } = apis;

const init = {
  loading: false,
  data: [],
  loadingPull: false,
  page: 0
};

export default {
  namespace: "search",
  state: {
    ...init
  },
  effects: {
    *getData({ requirements }, { call, put }) {
      yield put({ type: "changeState", loading: true });
      const { data } = yield call(getData, { requirements });
      yield put({ type: "changeState", loading: false, data });
    },
    *pullData({ page }, { call, put }) {
      yield put({ type: "changePullState", loadingPull: true });
      const { data } = yield call(pullData, { page });
      yield put({ type: "changePullState", loadingPull: false });
      yield put({ type: "changeData", data });
    }
  },
  reducers: {
    changeState: (state, { loading, data }) => ({
      ...state,
      loading,
      data
    }),
    changePullState: (state, { loadingPull }) => ({
      ...state,
      loadingPull
    }),
    clear: () => ({
      ...init
    }),
    changeData: (state, { data }) => {
      const page = state.page + 1;
      const result = state.data.concat(data);
      return {
        ...state,
        page,
        data: result
      };
    }
  }
};
