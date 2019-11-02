import React from 'react';
import "./style.scss";
import { useField } from 'formik';

export const FieldRadioButton = ({ children, ...props }) => {
  const [field] = useField({
    ...props
  });

  return (
    <div className="field-radio">
      <input className='radio-input' { ...field } { ...props } type="radio" />
      <label htmlFor={ props.id || props.name }>{children}</label>
    </div>
  );
};