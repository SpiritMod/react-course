import React from 'react';
import {useField} from 'formik';

export const MySelect = ({ label, children, ...props}) => {
  const [field, meta] = useField({
    ...props,
  });

  console.log(meta);

  return (
    <>
      <label htmlFor={ props.id || props.name }>{label}</label>

      <select className="cu-select" { ...props } { ...field } >
        { children }
      </select>

      <input  />

      { meta.touched && meta.error && (
        <span className="error">{ meta.error }</span>
      ) }
    </>
  )
};