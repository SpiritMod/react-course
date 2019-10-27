import React from 'react';
import './style.scss';

import { useNews } from './useNews';
import { Article } from '../Article';


export const News = () => {

  const source = useNews();

  const articles = source.map((item) => {
    return <Article key={item.objectId} {...item}/>
  });

  return (
    <div className="c-news">
      <h2>News</h2>
      <div className="c-news__list">
        { articles }
      </div>
    </div>
  )
};

