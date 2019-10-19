import React from 'react';
import './style.scss'

export const Date = (props) => {
  const { date } = props;
  return (
    <div className='date'>{date}</div>
  )
};

