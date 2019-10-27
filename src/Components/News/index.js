import React, {useEffect, useState} from 'react';
import './style.scss';

import { useNews } from './useNews';
import { Article } from '../Article';


export const News = () => {
  const [loading, setLoading] = useState(false);

  const source = useNews();

  useEffect(() => {
    (source.length > 0) ? setLoading(false) : setLoading(true);
  }, [source]);

  const articles = source.map((item) => {
    return <Article key={item.objectId} {...item}/>
  });

  const loader = <p>Загрузка....</p>;

  return (
    <div className="o-container">
      <div className="c-news">
        <h2>News</h2>
        <div className="c-news__list">
          {
            loading ? loader : articles
          }
        </div>
      </div>
    </div>
  )
};

