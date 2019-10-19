import React from 'react';
import './style.scss';
import { Tag } from '../../Assets/Tag';
import { Date } from '../../Assets/Date';
import { CommentsCounter } from '../../Assets/CommentsCounter';
import { LikesCounter } from '../../Assets/LikesCounter';
import { Share } from '../../Assets/Share';

export const Article = ( props ) => {

  const {
    title,
    description,
    published,
    likes,
    comments,
    image,
    tags
  } = props;

  const tagsList = tags.map((item, index) => {
    return <Tag key={ index } source={ item }/>
  });

  return (
    <div className="item-article">
      <div className="item-article__top">
        <div className="item-article__header">
          <img className="item-article__img" src={image} alt={title}/>
          <div className="tags-list">
            { tagsList }
          </div>
        </div>
        <div className="item-article__content">
          <a href="#" className="item-article__title">{title}</a>
          <div className="item-article__description">{description}</div>
        </div>
      </div>

      <div className="item-article__footer">
        <Date date={published}/>
        <div className="item-article__footer-group">
          <CommentsCounter counter={comments}/>
          <LikesCounter counter={likes}/>
          <Share />
        </div>
      </div>
    </div>
  )
};
