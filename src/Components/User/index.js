import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { userActions } from '../../bus/user/actions'

export const User = () => {

  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.user);

  const saveName = (event) => {
    const { value } = event.target;

    dispatch(userActions.setName(value))
  };

  return (
    <>
      <div className="o-container">
        <h1>User</h1>

        <input type="text" onChange={saveName} value={name}/>

        <h2>Name: { name }</h2>
      </div>
    </>
  )
};