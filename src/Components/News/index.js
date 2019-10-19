import React from 'react';
import './style.scss';
import { Article } from "../Article";


export const News = (props) => {

  const { source } = props;

  const articles = source.map(item => {
    return <Article key={item.id} {...item}/>
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

