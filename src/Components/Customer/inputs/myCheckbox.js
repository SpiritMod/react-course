import React from 'react';
import {useField} from 'formik';

export const myCheckbox = ({ children, ...props}) => {
  const [field, meta] = useField({
    ...props,
    type: 'checkbox'
  });

  return (
    <>
      <label htmlFor={ props.id || props.name }>{label}</label>
      <input className="text-input" { ...field } { ...props } />
      { meta.touched && meta.error && (
        <span className="error">{ meta.error }</span>
      ) }
    </>
  )
};