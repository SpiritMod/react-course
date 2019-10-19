// Core
import React from 'react';

const Page = (props) => {
  return (
    <>
      <h1>{props.title}</h1>
      <ul>
        <li>
          Page: <code>{props.page}</code>
        </li>
      </ul>
    </>
  );
};

const Book = (props) => {
  return <Page { ...props } />;
};

const Bookshelf = (props) => {
  return <Book { ...props } />;
};

const Room = (props) => {
  return <Bookshelf { ...props } />;
};

export const Library = (props) => {
  return <Room { ...props } />;
};