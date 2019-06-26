// import produce from 'immer';

export default {
  state: {
    a: {
      b: {
        c: {
          count: 0,
        },
      },
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      dispatch({ type: "add" })
    },
  },
  reducers: {
    add(state, action) {
      // return produce(state, draftState => {
      //   draftState.a.b.c.count += 1
      // })
      state.a.b.c.count += 1
      // return {
      //   count: state.count + 1
      // };
    }
  },
  effects: {
    *fetch({ type, payload }, { put, call, select }) {
    },
  },
}
