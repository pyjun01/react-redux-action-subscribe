import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from './store';
import { useActionSubscribe } from 'react-redux-action-callback';

const Value = () => {
  const value = useSelector((state: RootState) => state.value);

  return <div>result: {value}</div>;
};

const Buttons = () => {
  const dispatch = useDispatch();

  const onClickIncrement = () => {
    dispatch({ type: 'counter/incremented' });
  };

  const onClickDecrement = () => {
    dispatch({ type: 'counter/decremented' });
  };

  return (
    <div>
      <button onClick={onClickIncrement}>+</button>
      <button onClick={onClickDecrement}>-</button>
    </div>
  );
};

const Subscribe = () => {
  useActionSubscribe('counter/incremented', () => {
    console.log('incremented');
  });
  useActionSubscribe('counter/decremented', () => {
    console.log('decremented');
  });

  return null;
};

const App = () => {
  return (
    <div>
      <Value />
      <Buttons />
      <Subscribe />
    </div>
  );
};

export default App;
