import React, { Children } from 'react';

export const List = ({ children }) => {
  const count = Children.count(children);

  return (
    <>
      { count }
    </>
  );
}