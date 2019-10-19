// Core
import React from 'react';
import { render } from 'react-dom';

// Components
import { Library } from './Library';

const libraryData = {
  title: 'Harry Potter',
  page:  489,
};

render(<Library { ...libraryData } />, document.getElementById('root'));