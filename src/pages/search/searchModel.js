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
    *getData({ payload, listener }, { call, put }) {
      if (payload.page === 0) {
        yield put({ type: "clear" });
      }
      yield put({ type: "changeState", loading: true });
      const result = yield call(getData, payload);
      console.log(payload);
      yield put({ type: "changeData", result, listener });
      yield put({ type: "changeState", loading: false });
    }
  },
  reducers: {
    changeState: (state, { loading }) => ({
      ...state,
      loading
    }),
    changeData: (state, { result, listener }) => {
      const { errorCode } = result;
      if (errorCode === 0) {
        const { showNumber, total, data } = result;
        if (showNumber < total) {
          listener.add();
        } else {
          listener.remove();
        }
        return {
          ...state,
          data: state.data.concat(data),
          showNumber,
          total
        };
      }
      return {
        ...state,
        total: -1
      };
    },
    clear: () => ({
      ...init
    })
  }
};
