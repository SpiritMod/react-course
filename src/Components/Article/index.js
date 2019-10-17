import React from 'react';
import './style.scss';
import { Tag } from '../../Assets/Tag';
import { Date } from '../../Assets/Date';
import { CommentsCounter } from '../../Assets/CommentsCounter';
import { LikesCounter } from '../../Assets/LikesCounter';
import { Share } from '../../Assets/Share';

export const Article = ({ item }) => {

  const tags = item.tags.map((item, index) => {
    return <Tag key={index} tag={item}/>
  });

  return (
    <div className="item-article">
      <div className="item-article__top">
        <div className="item-article__header">
          <img className="item-article__img" src={item.image} alt={item.title}/>
          <div className="tags-list">
            { tags }
          </div>
        </div>
        <div className="item-article__content">
          <a href="#" className="item-article__title">{item.title}</a>
          <div className="item-article__description">{item.description}</div>
        </div>
      </div>

      <div className="item-article__footer">
        <Date date={item.published}/>
        <div className="item-article__footer-group">
          <CommentsCounter counter={item.comments}/>
          <LikesCounter counter={item.likes}/>
          <Share />
        </div>
      </div>
    </div>
  )
};
