import React from "react";
import "./style.scss";
import { useField } from "formik";

export const SelectField = ({ label, children, ...props }) => {
  const [field, meta] = useField({
    ...props
  });

  return (
    <div className={ `field-select ${ meta.error && meta.touched && "error" }` }>
      <label htmlFor={ props.id || props.name }>{label}</label>
      <select className="select" { ...props } {...field} >
        { children }
      </select>
      {
        meta.error && meta.touched && <span className='field-error'>{meta.error}</span>
      }
    </div>
  );
};