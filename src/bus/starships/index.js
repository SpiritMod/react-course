import React from "react";
import { useStarshipsFetch } from "./hooks/useStarshipsFetch";

import {Title} from "../../components/Title";

export const Starships = () => {

  const { data, isFetching, error } = useStarshipsFetch();

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
      <Title>Starships</Title>
      {loader}
      {errorMessage}
      {list}
    </div>
  )
};