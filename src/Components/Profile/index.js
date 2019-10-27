import React, { useState } from 'react';

import { useCounter } from './useCounter';

export const Profile = () => {
  console.log('Profile Render');

  const { counter, increase, decrease } = useCounter(0);

  const [ profile, setProfile ] = useState({
    age: 21,
    type: 'admin'
  });

  const changeAge = () => {
    setProfile((prevProfile) => {
      return {
        ...prevProfile,
        age: 99
      }
    });
  }

  return (
    <>
      <div className="o-container">
        <h1>Profile</h1>
        <button onClick={ increase }>Increase value</button>
        <p>Counter: { counter }</p>
        <button onClick={ decrease }>Decrease value</button>
        <button onClick={ changeAge }>Change Age</button>
        <p>{ profile.age }</p>
        <p>{ profile.type }</p>
      </div>
    </>
  )
};