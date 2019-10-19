import React from 'react';
import './style.scss'

export const LikesCounter = (props) => {
  const { counts } = props;
  return (
    <div className="likes-counter">
      <span className="icon-heart"></span>
      { counts }
    </div>
  )
};

