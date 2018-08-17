import apis from "./tagSearchApi";

const { getData } = apis;

export default {
  namespace: "tagSearch",
  state: {
    loading: false,
    currentTag: [],
    associatedTags: [],
    articles: []
  },
  effects: {
    *getData({ tagNames }, { call, put }) {
      yield put({ type: "changeCurrentTag", tagNames });
      yield put({ type: "changeLoading", loading: true });
      const { data, associatedTags } = yield call(getData, { tagNames });
      yield put({ type: "changeState", data, associatedTags });
      yield put({ type: "changeLoading", loading: false });
    }
  },
  reducers: {
    changeCurrentTag: (state, { tagNames }) => ({
      ...state,
      currentTag: tagNames
    }),
    changeLoading: (state, { loading }) => ({
      ...state,
      loading
    }),
    changeState: (state, { data, associatedTags }) => ({
      ...state,
      articles: data,
      associatedTags
    })
  }
};
