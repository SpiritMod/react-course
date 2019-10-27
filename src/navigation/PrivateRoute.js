import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { book } from "./book";

export const PrivateRoute = ({ children, ...rest }) => {
  const authenticated = !(localStorage.getItem("authenticated") === null) ? JSON.parse(localStorage.getItem('authenticated')) : false;

  return (
    <Route
      {...rest}
      render={({ location }) =>
        authenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: book.login,
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};