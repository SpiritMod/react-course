import React from 'react';
import { NavLink } from 'react-router-dom';
import { book } from "../../navigation/book";

import './index.scss';

export const Header = () => {
  return (
    <header className="c-header">
      <div className="o-container">
        <nav>
          <ul>
            <li>
              <NavLink to={book.people}>People</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
};