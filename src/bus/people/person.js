import React from "react";
import { useParams } from 'react-router-dom';
import { usePersonFetch } from "./hooks/usePersonFetch";

import { Title } from "../../components/Title";
import { Loader } from "../../components/Loader";

export const Person = () => {
  const { id } = useParams();

  const { person, isFetching, error } = usePersonFetch(id);
  const hasError = error.status === 404;
  const {
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender
  } = person;


  const errorMessage = hasError && (
    <p>Upsss... 404</p>
  );

  const loader = isFetching && <Loader/>;

  const personFields = isFetching || (
    <div key={id}>
      <p>name: {name}</p>
      <p>height: {height}</p>
      <p>mass: {mass}</p>
      <p>hair color: {hair_color}</p>
      <p>skin color: {skin_color}</p>
      <p>eye color: {eye_color}</p>
      <p>birth year: {birth_year}</p>
      <p>gender: {gender}</p>
    </div>
  );

  return (
    <div className="o-container">
      <Title>Person</Title>
      {loader}
      {errorMessage}
      {!hasError && personFields}
    </div>
  )
};