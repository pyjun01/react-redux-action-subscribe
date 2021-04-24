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
}

interface Handler {
  [key: string]: (payload: unknown) => void;
}

export const useActionCallback = (sub: Handler) => {
  useEffect(() => {
    const unsubscribe = Store.subscribe(sub);

    return unsubscribe;
  }, []);
}

const actionCallback: Middleware = () => (next) => (action) => {
  const { type, payload } = action;

  if (type) {
    for (let i = 0; i < Store.listeners.length; i++) {
      Store.listeners[i] && Store.listeners[i][type] && Store.listeners[i][type](payload);
    }
  }

  next(action);
}

export default actionCallback;
