import React from 'react';
import './style.scss'

export const CommentsCounter = (item) => {
  return (
    <div className="comments-counter">
      <span className="icon-comment"></span>
      {item.counter}
    </div>
  )
};

