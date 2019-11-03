import React from 'react';
import { useField } from 'formik';
import "./style.scss";

export const FieldRadioGroup = ({ children, ...props }) => {
  const [field, meta] = useField({
    ...props
  });

  const { title } = props;

  return (
    <div className={ `field-radio-group ${ meta.error && meta.touched && "error" }` } {...field} >
      <div className="field-radio-group__title">{title}</div>
      <div className="field-radio-group__content">
        {children}
      </div>
      {
        meta.error && meta.touched && <span className='field-error'>{meta.error}</span>
      }
    </div>
  );
};