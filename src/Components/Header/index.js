import React from 'react';
import { NavLink } from 'react-router-dom';
import {book} from "../../navigation/book";

import './index.scss';

export const Header = () => {
  return (
    <header className="c-header">
      <div className="o-container">
        <nav>
          <ul>
            <li>
              <NavLink to={book.root}>Home</NavLink>
            </li>
            <li>
              <NavLink to={book.news}>News</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
};

