# react-redux-action-subscribe

Add an action listener with react hooks

## Install

```bash
npm install --save react-redux-action-subscribe
```

## Usage

### Redux Store

```tsx
import { createStore, applyMiddleware } from 'redux';
import actionMiddleware from 'react-redux-action-subscribe';

import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(actionMiddleware));
```

### Component

```tsx
import React, { Component } from 'react'
import { useActionSubscribe } from 'react-redux-action-subscribe'

function Example {

  useActionSubscribe({
    addItem: (payload) => {

    }
  });

  return <MyComponent />
}
```

## License

MIT © [pyjun01](https://github.com/pyjun01)
