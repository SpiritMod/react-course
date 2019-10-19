// Core
import React, { useContext } from 'react';

import { Context } from './context';

const Page = () => {
  const context = useContext(Context);

  return (
    <>
      <h1>{context.title}</h1>
      <ul>
        <li>
          Page: <code>{context.page}</code>
        </li>
      </ul>
    </>
  );
};

const Book = () => {
  return <Page />;
};

const Bookshelf = () => {
  return <Book />;
};

const Room = () => {
  return <Bookshelf />;
};

export const Library = () => {
  return <Room />;
};