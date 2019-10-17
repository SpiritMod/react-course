import React from 'react';
import './style.scss'

export const Tag = (item) => {
  return (
    <a href='#' className='tag'>{item.tag}</a>
  )
};

