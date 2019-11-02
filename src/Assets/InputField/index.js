import React from 'react';
import './style.scss'
import { useField } from 'formik';

export const InputField = ({ name, label, error, ...props }) => {
  const [field] = useField({
    ...props
  });

  return (
    <div className={ `field ${ error ? "error" : ""}` }>
      <label htmlFor={ props.id || props.name }>{label}</label>
      <input className="text-input" { ...field } { ...props } />
      {error && <span className="field-error">{ error }</span>}
    </div>
  );
};