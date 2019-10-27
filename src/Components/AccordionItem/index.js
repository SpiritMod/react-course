import React from 'react';
import './style.scss';

import cx from 'classnames';

export const AccordionItem = (props) => {

  const {
    source: { question, answer },
    onClick,
    isOpened
  } = props;

  const customClassName = cx(
    'accordion-item',
    {
      isOpened: isOpened
    }
  );


  return (
    <div className={customClassName}>
      <div className="accordion-item__title" onClick={() => onClick()}>
        { question }
        { isOpened ? <span className="icon-remove"></span> : <span className="icon-add"></span> }
      </div>
      <div className="accordion-item__content">
        { answer }
      </div>
    </div>
  )
};