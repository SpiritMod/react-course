import React from 'react';
import { Article } from "../Article";

const db = [
  {
    id: 'a1',
    title: 'Title 1'
  },
  {
    id: 'a2',
    title: 'Title 2'
  },
  {
    id: 'a3',
    title: 'Title 3'
  },
];

export const News = () => {
  const articles = db.map(item => {
    return <Article key={item.id} item={item}/>
  });

  return (
    <>
      <h2>News</h2>
      <ul>
        { articles }
      </ul>
    </>
  )
};

