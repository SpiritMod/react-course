import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/App';
import * as serviceWorker from './serviceWorker';

import { history } from "./navigation/history";
import { Router } from 'react-router-dom';
import { Routes } from "./navigation";

ReactDOM.render(
  <Router history={history}>
    <Routes />
  </Router>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
