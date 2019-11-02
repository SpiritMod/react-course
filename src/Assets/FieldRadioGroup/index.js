import React from 'react';
import "./style.scss";

export const FieldRadioGroup = ({ children, ...props }) => {

  const { title } = props;

  return (
    <div className="field-radio-group">
      <div className="field-radio-group__title">{title}</div>
      <div className="field-radio-group__content">
        {children}
      </div>
    </div>
  );
};