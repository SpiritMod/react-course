import React, { useState } from 'react';
import './style.scss';

import { useCounter } from "./useCounter";

export const LikesCounter = (props) => {
  const { counts } = props;

  const { counter, increase, decrease } = useCounter(counts);


  return (
    <div onClick={increase} className="likes-counter">
      <span className="icon-heart"></span>
      { counter }
    </div>
  )
};

