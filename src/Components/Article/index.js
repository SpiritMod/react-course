import React from 'react';
import './style.scss';
import { Link } from "react-router-dom";
import { Tag } from '../../Assets/Tag';
import { Date } from '../../Assets/Date';
import { CommentsCounter } from '../../Assets/CommentsCounter';
import { LikeCounter } from '../../Assets/LikeCounter';
import { Share } from '../../Assets/Share';

export const Article = ( props ) => {

  const {
    title,
    description,
    created,
    likes,
    comments,
    poster,
    tags,
    objectId
  } = props;

  const tagsList = tags.split(', ').map((item, index) => {
    return <Tag key={ index } source={ item }/>
  });

  return (
    <div className="item-article">
      <div className="item-article__top">
        <div className="item-article__header">
          <Link to={`/news/${objectId}`}>
            <img className="item-article__img" src={poster} alt={title}/>
            <div className="tags-list">
              { tagsList }
            </div>
          </Link>
        </div>
        <div className="item-article__content">
          <div className="item-article__title">{title}</div>
          <div className="item-article__description">{description}</div>
        </div>
      </div>

      <div className="item-article__footer">
        <Date date={created}/>
        <div className="item-article__footer-group">
          <CommentsCounter counts={comments}/>
          <LikeCounter counts={likes}/>
          <Share />
        </div>
      </div>
    </div>
  )
};
