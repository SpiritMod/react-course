import React from 'react';
import { Starships } from "../starships/index";
import { Planets } from "../planets/index";

import { useLoading } from "./useLoading";

export const Swapi = () => {
  const { isDataLoading } = useLoading();

  const status = isDataLoading && 'Not ready...';

  return (
    <>
      <div className="o-container">
        <h1>Swapi {status}</h1>
        <Starships/>
        <Planets/>
      </div>
    </>
  )
};