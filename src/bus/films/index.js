import React from "react";
import { NavLink } from 'react-router-dom';
import { useFilmsFetch } from "./hooks/useFilmsFetch";

import { Title } from "../../components/Title";
import { Loader } from "../../components/Loader";

export const Films = () => {

  const { data, isFetching, error } = useFilmsFetch();

  const errorMessage = error.status === 404 && (
    <p>Upsss... 404</p>
  );

  const loader = isFetching && <Loader/>;

  const list = isFetching || data.map(({ title }, index) => {
    return (
      <li key={index}>
        <NavLink to={`/films/${index + 1}`}>{title}</NavLink>
      </li>
    )
  });

  return (
    <div className="o-container">
      <Title>Films</Title>
      {loader}
      {errorMessage}
      {list}
    </div>
  )
};