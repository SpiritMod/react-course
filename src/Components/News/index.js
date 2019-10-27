import React, {useEffect, useState} from 'react';
import { useParams, useHistory } from 'react-router-dom';

import './style.scss';

import { book } from "../../navigation/book";
import { useNews } from './useNews';
import { Article } from '../Article';


export const News = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const { id } = useParams();
  const history = useHistory();
  const source = useNews();


  useEffect(() => {
    if (id) {
      setData(source.filter(item => {
        return item.objectId === id
      }));
    } else {
      setData(source);
    }

    (source.length > 0) ? setLoading(false) : setLoading(true);

  }, [source, id]);


  const articles = data.map((item) => {
    return <Article key={item.objectId} {...item}/>
  });

  if ((data.length === 0) && (loading === false)) {
    history.push(book.unknown);
  }

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

