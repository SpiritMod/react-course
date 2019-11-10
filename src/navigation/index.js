import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {book} from "./book";

import { Views } from "../views";
import { Header } from "../components/Header";
import { People } from "../bus/people/index";
import { Person } from "../bus/people/person";
import { Films } from "../bus/films/index";
import { Film } from "../bus/films/film";


export const Routes = () => (

  <>
    <Route
      component={ Header }
      path={ book.root }
    />

    <Switch>

      <Route exact path={ book.people } >
        <Views.Facade>
          <People/>
        </Views.Facade>
      </Route>
      <Route exact path={ book.person } >
        <Views.Facade>
          <Person/>
        </Views.Facade>
      </Route>

      <Route exact path={ book.films } >
        <Views.Facade>
          <Films/>
        </Views.Facade>
      </Route>
      <Route exact path={ book.film } >
        <Views.Facade>
          <Film/>
        </Views.Facade>
      </Route>

    </Switch>

  </>

);
