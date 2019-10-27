import React from 'react';
import './style.scss'

export const Tag = (props) => {
  const { source } = props;
  return (
    <div className='tag'>{ source }</div>
  )
};

