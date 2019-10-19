import React from 'react';
import { string } from 'prop-types';
import './style.scss'

import cx from 'classnames';

export const Button = ( props ) => {
  const {
    children = 'Click',
    disabled,
    type
  } = props;

  const customClassNames = cx({
    btn: true,
    disable: disabled
  });

  return (
    <button className={customClassNames}>{children}</button>
  )
};

Button.propTypes = {
  type: string.isRequired
};