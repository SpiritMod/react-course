import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

export const Login = () => {

  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  const login = () => {
    localStorage.setItem('authenticated', 'true');
    history.replace(from);
  };

  return (
    <>
      <main className="c-main" role="main">
        <div className="o-container">
          <h2>Login</h2>
          <button onClick={login} className="btn">Login</button>
        </div>
      </main>
    </>
  )
};

