import React from 'react';
import './style.scss'

export const LikesCounter = (item) => {
  return (
    <div className="likes-counter">
      <span className="icon-heart"></span>
      {item.counter}
    </div>
  )
};

