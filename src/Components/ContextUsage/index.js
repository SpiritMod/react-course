import React from 'react';

import { Library } from './Library';

// Context
import { Provider } from './context';

const data = {
  title: 'Bookname',
  page: 23
};

export const ContextUsage = () => (
  <Provider value={ data }>
    <Library />
  </Provider>
);