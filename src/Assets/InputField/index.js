import React from 'react';
import './style.scss'
import { useField } from 'formik';

export const InputField = ({ label, ...props }) => {
  const [field, meta] = useField({
    ...props
  });

  return (
    <div className={ `field ${ meta.error && meta.touched && "error" }` }>
      <label htmlFor={ props.id || props.name }>{label}</label>
      <input className="text-input" { ...field } { ...props } />
      {
        meta.error && meta.touched && <span className='field-error'>{meta.error}</span>
      }
    </div>
  );
};