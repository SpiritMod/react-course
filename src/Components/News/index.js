import React, {useEffect, useState} from 'react';
import { useParams, useHistory } from 'react-router-dom';

import './style.scss';

import { book } from "../../navigation/book";
import { useNews } from './useNews';
import { Article } from '../Article';
import { Logout } from '../Logout';


export const News = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const { id } = useParams();
  const history = useHistory();
  const source = useNews();

  const authenticated = !(localStorage.getItem("authenticated") === null) ? JSON.parse(localStorage.getItem('authenticated')) : false;


  useEffect(() => {

    if (id) {
      setData(source.filter(item => {
        return item.objectId === id
      }));
    } else {
      setData(source);
    }

    (source.length > 0) ? setLoading(false) : setLoading(true);

    return () => {

    }

  }, [source, id]);

  const articles = data.map((item) => {
    return <Article key={item.objectId} {...item}/>
  });

  if ((data.length === 0) && (loading === false)) {
    history.push(book.unknown);
  }

  const loader = <p>Загрузка....</p>;

  const logout = (authenticated && id) ? <Logout /> : '';

  return (
    <div className="o-container">
      <div className="c-news">
        <h2>News</h2>
        { logout }
        <div className="c-news__list">
          {
            loading ? loader : articles
          }
        </div>
      </div>
    </div>
  )
};

