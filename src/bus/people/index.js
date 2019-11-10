import React from "react";
import { NavLink } from 'react-router-dom';
import { usePeopleFetch } from "./hooks/usePeopleFetch";

import { Title } from "../../components/Title";
import { Loader } from "../../components/Loader";

export const People = () => {

  const { data, isFetching, error } = usePeopleFetch();
  const hasError = error.status === 404;

  const errorMessage = hasError && (
    <p>Upsss... 404</p>
  );

  const loader = isFetching && <Loader/>;

  const list = isFetching || data.map(({ name, height }, index) => {
    return (
      <li key={index}>
        <NavLink to={`/people/${index + 1}`}>{name}</NavLink>
      </li>
    )
  });

  return (
    <div className="o-container">
      <Title>People</Title>
      {loader}
      {errorMessage}
      { !hasError ? list : ''}
    </div>
  )
};