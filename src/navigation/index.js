import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { book } from "./book";

import { Header} from "../Components/Header";
import { Home } from '../Views/Home';
import { Unknown } from '../Components/Unknown';
import { News } from "../Components/News";
import { PrivateRoute } from "./PrivateRoute";
import { Login } from "../Views/Login";
import { StudentRegistration } from "../Components/StudentRegistration";
import { Student } from "../Components/Student";

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

      <PrivateRoute path={book.newsItem}>
        <News />
      </PrivateRoute>

      <Route
        component={ News }
        path={ book.news }
        exact
      />

      <Route
        exact
        component = { Unknown }
        path = { book.unknown }
      />

      <Route
        component={ Login }
        path={ book.login }
        exact
      />

      <Route
        component={ Student }
        path={ book.student }
        exact
      />

      <Route
        component={ StudentRegistration }
        path={ book.studentRegistration }
        exact
      />

      <Redirect to = { book.unknown } />

    </Switch>

  </>
);

