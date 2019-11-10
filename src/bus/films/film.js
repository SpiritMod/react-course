import React from "react";
import { useParams } from 'react-router-dom';
import { useFilmFetch } from "./hooks/useFilmFetch";

import { Title } from "../../components/Title";
import { Loader } from "../../components/Loader";

export const Film = () => {
  const { id } = useParams();

  const { film, isFetching, error } = useFilmFetch(id);
  const {
    title,
    director,
    producer,
    opening_crawl,
  } = film;

  const errorMessage = error.status === 404 && (
    <p>Upsss... 404</p>
  );

  const loader = isFetching && <Loader/>;

  const personFields = isFetching || (
    <div key={id}>
      <p>title: {title}</p>
      <p>director: {director}</p>
      <p>producer: {producer}</p>
      <p>opening crawl: {opening_crawl}</p>
    </div>
  );

  return (
    <div className="o-container">
      <Title>Film</Title>
      {loader}
      {errorMessage}
      {personFields}
    </div>
  )
};