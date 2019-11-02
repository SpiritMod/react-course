import React from 'react';
import './style.scss'
import { useField } from 'formik';

export const InputField = ({ label, ...props }) => {
  const [field] = useField({
    ...props
  });

  return (
    <>
      <label htmlFor={ props.id || props.name }>{label}</label>
      <input className='text-input' { ...field } { ...props } />
    </>
  );
};