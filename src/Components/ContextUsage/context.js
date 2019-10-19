import { createContext } from 'react';

const libraryData = {
  title: 'Harry Potter',
  page:  489,
};

export const Context = createContext(libraryData);
export const { Provider, Consumer } = Context;