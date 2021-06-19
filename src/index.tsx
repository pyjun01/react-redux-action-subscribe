import { useEffect } from 'react';
import { Middleware } from 'redux';

const Store: {
  listeners: Handler[];
  subscribe: (obj: Handler) => () => void;
} = {
  listeners: [],
  subscribe(obj: Handler) {
    this.listeners.push(obj);

    return () => {
      const index = this.listeners.indexOf(obj);

      this.listeners.splice(index, 1);
    };
  },
};

type Callback = (action: unknown) => void;

interface Handler {
  [key: string]: Callback;
}

export const useActionSubscribe = (sub: Handler | string, callback?: Callback) => {
  useEffect(() => {
    if (typeof sub === 'string') {
      if (typeof callback === 'function') {
        const unsubscribe = Store.subscribe({
          [sub]: callback,
        });

        return unsubscribe;
      }

      // throw Error('callback must be function');
      return;
    }

    const unsubscribe = Store.subscribe(sub);

    return unsubscribe;
  }, []);
};

const actionCallback: Middleware = () => (next) => (action) => {
  const { type } = action;

  const res = next(action);

  if (type) {
    for (let i = 0; i < Store.listeners.length; i++) {
      Store.listeners[i] && Store.listeners[i][type] && Store.listeners[i][type](action);
    }
  }

  return res;
};

export default actionCallback;
