import React, { useState } from 'react';
import './style.scss';

import { useCounter } from "./useCounter";

export const LikeCounter = (props) => {
  const { counts } = props;

  const { counter, increase, decrease } = useCounter(counts);

  const [ likes, setLikes ] = useState(true);

  const changeLikes = () => {
    setLikes((prevLikes) => {
      return !prevLikes
    });

    likes ? increase() : decrease();
  };

  return (
    <div onClick={changeLikes} className={`likes-counter ${!likes ? 'is-active' : ''}`}>
      <span className="icon-heart"></span>
      { counter }
    </div>
  )
};

