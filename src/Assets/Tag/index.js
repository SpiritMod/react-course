import React from 'react';
import './style.scss'

export const Tag = (props) => {
  const { source } = props;
  return (
    <a href='#' className='tag'>{ source }</a>
  )
};

