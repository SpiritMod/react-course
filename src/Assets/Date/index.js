import React from 'react';
import './style.scss'

export const Date = (item) => {
  console.log(item);
  return (
    <div className='date'>{item.date}</div>
  )
};

