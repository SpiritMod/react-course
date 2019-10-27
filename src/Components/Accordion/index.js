import React, { useState } from 'react';
import { AccordionItem } from '../AccordionItem';
import './style.scss';

export const Accordion = (props) => {
  const { source } = props;

  const [ openedId, setOpenedId ] = useState(false);

  const accordionItems = source.map((item, i) => {
    return <AccordionItem
      key={i}
      source={item}
      onClick={() => setOpenedId(openedId !== i ? i : false)}
      isOpened={openedId === i ? true : false}
    />
  });


  return (
    <div className="accordion">
      <div className="accordion__header">
        <div className="accordion__title">Accordion title</div>
      </div>
      <div className="accordion__content">
        { accordionItems }
      </div>
    </div>
  )
};