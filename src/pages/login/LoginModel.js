import apis from "./LoginApi";

const { postUserLogin } = apis;

export default {
  namespace: "login",
  state: {
    user: {}
  },

  effects: {
    *loginUser({ user }, { call, put }) {
      console.log("*loginUser:");
      console.log(user);
      const { data } = yield call(postUserLogin, user);
      yield put({ type: "changeState", data });
    }
  },

  reducers: {
    changeState: (state, { data }) => {
      console.log("data:");
      console.log(data);
      return { ...state, user: data };
    }
  }
};
