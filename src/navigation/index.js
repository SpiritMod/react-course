import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { book } from "./book";

import { Header} from "../Components/Header";
import { Footer } from '../Components/Footer';
import { Home } from '../Views/Home';

import { News } from "../Components/News";

export const Routes = () => (
  <>
    <Route
      component={ Header }
      path={ book.root }
    />

    <Switch>
      <Route
        component={ Home }
        path={ book.root }
        exact
      />

      <Route
        component={ News }
        path={ book.news }
      />

    </Switch>

  </>
);

