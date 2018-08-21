import apis from "./tagSearchApi";

const { getData } = apis;

const init = {
  loading: false,
  currentTag: [],
  associatedTags: [],
  articles: []
};

export default {
  namespace: "tagSearch",
  state: {
    ...init
  },
  effects: {
    *getData({ tagNames }, { call, put }) {
      yield put({ type: "clear" });
      yield put({ type: "changeLoading", tagNames, loading: true });
      const result = yield call(getData, { tagNames, page: 0 });
      yield put({ type: "changeState", result });
      yield put({ type: "changeLoading", tagNames, loading: false });
    },
    *pullData({ tagNames, page }, { call, put }) {
      yield put({ type: "changeLoading", tagNames, loading: true });
      const result = yield call(getData, { tagNames, page });
      yield put({ type: "changePullState", result });
      yield put({ type: "changeLoading", tagNames, loading: false });
    }
  },
  reducers: {
    changeLoading: (state, { tagNames, loading }) => ({
      ...state,
      currentTag: tagNames,
      loading
    }),
    changeState: (state, { result }) => {
      const { errorCode } = result;
      if (errorCode === 0) {
        const { data, associatedTags } = result;
        return {
          ...state,
          articles: data,
          associatedTags
        };
      }
      return {
        ...state
      };
    },
    changePullState: (state, { result }) => {
      const { errorCode } = result;
      if (errorCode === 0) {
        const { data, associatedTags } = result;
        return {
          ...state,
          articles: state.articles.concat(data),
          associatedTags
        };
      }
      return {
        ...state
      };
    },
    clear: () => ({
      ...init
    })
  }
};
