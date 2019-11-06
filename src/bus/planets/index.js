import React from "react";
import { usePlanetsFetch } from "./hooks/usePlanetsFetch";

import {Title} from "../../components/Title";

export const Planets = () => {

  const { data, isFetching, error } = usePlanetsFetch();

  const errorMessage = error.status === 404 && (
    <p>Upsss... 404</p>
  );

  //console.log(error);

  const loader = isFetching && (
    <p>Loading data from API...</p>
  );

  const list = isFetching || data.map(({name}, index) => (
    <li key={index}>{name}</li>
  ));

  return (
    <div className="o-container">
      <Title>Planets</Title>
      {loader}
      {errorMessage}
      {list}
    </div>
  )
};