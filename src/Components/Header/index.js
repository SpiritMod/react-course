import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {book} from "../../navigation/book";

export const Header = () => {
  return (
    <header className="c-header">
      <div className="o-container">
        <h1>Header</h1>
        <nav>
          <ul>
            <NavLink to={book.profile} activeClassName="is-active">Profile</NavLink>
            <NavLink to={book.news} activeClassName="is-active">News</NavLink>
          </ul>
        </nav>
      </div>
    </header>
  )
};

