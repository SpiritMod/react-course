import React from 'react';
import moment from 'moment';
import './style.scss'

export const Date = (props) => {
  const { date } = props;
  return (

    <div className='date'>{moment(date).format('DD.MM.YYYY')}</div>
  )
};

