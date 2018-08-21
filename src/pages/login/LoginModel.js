import apis from "./LoginApi";

const { userLogin } = apis;

export default {
  namespace: "login",
  state: {
    user: {}
  },

  effects: {
    *loginUser({ user }, { call, put }) {
      const { data } = yield call(userLogin, user);
      yield put({ type: "changeState", data });
    }
  },

  reducers: {
    changeState: (state, { data }) => ({
      ...state,
      user: data
    })
  }
};
