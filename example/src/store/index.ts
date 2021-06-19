import { applyMiddleware, createStore } from 'redux';
import actionCallback from 'react-redux-action-callback';

function counterReducer(state = { value: 0 }, action: any) {
  switch (action.type) {
    case 'counter/incremented':
      return { value: state.value + 1 };
    case 'counter/decremented':
      return { value: state.value - 1 };
    default:
      return state;
  }
}

const store = createStore(
  counterReducer,
  {
    value: 0,
  },
  applyMiddleware(actionCallback)
);

export type RootState = ReturnType<typeof counterReducer>;

export default store;
