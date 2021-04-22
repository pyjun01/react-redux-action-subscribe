# react-redux-action-callback
Add an action listener with react hooks

## Install

```bash
npm install --save react-redux-action-callback
```

## Usage

```tsx
import React, { Component } from 'react'

import useActionCallback from 'react-redux-action-callback'

function Example {

  useActionCallback({
    actionType: (payload) => {

    }
  });

  return <MyComponent />
}
```

## License

MIT © [pyjun01](https://github.com/pyjun01)
