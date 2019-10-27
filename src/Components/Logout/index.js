import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import './index.scss';
import {book} from "../../navigation/book";

export const Logout = () => {

  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: book.login } };

  const logout = () => {
    localStorage.setItem('authenticated', 'false');
    history.replace(from);
  };

  return (
    <div className="c-logout">
      <button onClick={logout} className="btn">Logout</button>
    </div>
  )
};