
export default {

  namespace: 'dict',

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      console.warn('subscriptions personHome');
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
