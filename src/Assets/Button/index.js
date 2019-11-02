import React from 'react';
import './style.scss'

import cx from 'classnames';

const isDisabled = () => false;

export const Button = ({ children, ...props }) => {
  const customClassNames = cx({
    btn: '',
    disable: isDisabled()
  });
  return (
    <button className={`c-btn + ${customClassNames}`} {...props}><span className="c-btn__text">{ children }</span></button>
  )
};

