import React from "react";
import "./style.scss";
import { useField } from "formik";

export const SelectField = ({ label, children, ...props }) => {
  const [field] = useField({
    ...props
  });

  return (
    <>
      <label htmlFor={ props.id || props.name }>{label}</label>
      <select className="field-select" { ...props } {...field} >
        { children }
      </select>
    </>
  );
};