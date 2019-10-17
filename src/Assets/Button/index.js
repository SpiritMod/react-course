import React from 'react';
import './style.scss'

import cx from 'classnames';

const isDisabled = () => false;

export const Button = () => {
  const customClassNames = cx({
    btn: true,
    disable: isDisabled()
  });
  return (
    <button className={customClassNames}>btn</button>
  )
};

