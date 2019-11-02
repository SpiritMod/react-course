import React from 'react';
import { Provider } from 'react-redux';


import './theme/sass/constructor.scss';
import {history} from "./navigation/history";
import { Router } from 'react-router-dom';
import { Routes } from "./navigation";

import { store } from "./init/store";

const App = () => {
  return (
    <Provider store={ store }>
      <Router history={history}>
        <Routes />
      </Router>
    </Provider>
  )
};

export default App;
