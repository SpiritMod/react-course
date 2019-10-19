import React from 'react';
import './style.scss'

export const CommentsCounter = (props) => {
  const { counts } = props;
  console.log(props);
  return (
    <div className="comments-counter">
      <span className="icon-comment"></span>
      { counts }
    </div>
  )
};

