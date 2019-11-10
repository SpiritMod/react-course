import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {book} from "./book";

import { Views } from "../views";
import { Header } from "../components/Header";
import { People } from "../bus/people/index";
import { Person } from "../bus/people/person";


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

    </Switch>

  </>

);
