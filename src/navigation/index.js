import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import {book} from "./book";

import { Views } from "../views";
import { Starships } from "../bus/starships/index";
import {Planets} from "../bus/planets/index";
import {Swapi} from "../bus/swapi";


export const Routes = () => (

  <>

    <Switch>

      <Route exact path={ book.starships } >
        <Views.Facade>
          <Starships/>
        </Views.Facade>
      </Route>

      <Route exact path={ book.planets } >
        <Views.Facade>
          <Planets/>
        </Views.Facade>
      </Route>

      <Route exact path={ book.swapi } >
        <Views.Facade>
          <Swapi/>
        </Views.Facade>
      </Route>


    </Switch>

  </>

);
