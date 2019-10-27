import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Profile } from "../Components/Profile";
import { News } from "../Components/News";
import { Header} from "../Components/Header";
import { book } from "./book";
import { Unknown } from "../Views/Unknown";
import {Home} from "../Views/Home";

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
        exact
      />
      <Route
        component={ Profile }
        path={ book.profile }
        exact
      />
      <Route
        component={ Unknown }
        path={ book.unknown }
        exact
      />

      <Redirect to={book.unknown} />

    </Switch>

  </>

);
