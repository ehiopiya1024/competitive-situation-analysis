import apis from "./searchApi";

const { getData } = apis;

const init = {
  loading: false,
  data: [],
  showNumber: 0,
  total: undefined
};

export default {
  namespace: "search",
  state: {
    ...init
  },
  effects: {
    *getData({ payload }, { call, put }) {
      if (payload.page === 0) {
        yield put({ type: "clear" });
      }
      yield put({ type: "changeState", loading: true });
      const result = yield call(getData, payload);
      yield put({ type: "changeData", result });
      yield put({ type: "changeState", loading: false });
    }
  },
  reducers: {
    changeState: (state, { loading }) => ({
      ...state,
      loading
    }),
    changeData: (state, { result }) => ({
      ...state,
      data: state.data.concat(result.data),
      showNumber: result.showNumber,
      total: result.total
    }),
    clear: () => ({
      ...init
    })
  }
};
