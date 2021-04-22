import { useEffect } from 'react';
import { Middleware } from 'redux';

interface Handler {
  [key: string]: (payload: unknown) => void;
}

export const useActionCallback = (sub: Handler) => {
  useEffect(() => {
    
  }, []);
}

const ActionMiddleware: Middleware = () => (next) => (action) => {
  const { type } = action;

  if (type) {

  }

  next(action);
}

export default ActionMiddleware;
