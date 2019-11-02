import React from "react";
import { Formik } from "formik";

import "./style.scss";
import { Button } from "../../Assets/Button";
import { InputField } from "../../Assets/InputField";
import { SelectField } from "../../Assets/SelectField";
import { FieldRadioButton } from "../../Assets/FieldRadioButton";
import { FieldRadioGroup } from "../../Assets/FieldRadioGroup";


export const StudentRegistration = () => {
  const initialValues = {
    firstName: "",
    surname: "",
    age: 0,
    email: "",
    sex: "",
    speciality: ""
  };

  const submitForm = (values) => {
    console.log(values);
  };

  return (
    <>
      <div className="o-container">
        <h2>Registration</h2>

        <Formik
          initialValues={ initialValues }
          onSubmit={ submitForm }
        >

          {props => (
            <form className="form__registration" onSubmit={props.handleSubmit}>
              <div className="form__group">
                <div className="form__field">
                  <InputField
                    label="First Name"
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    value={props.values.firstName}
                  />
                </div>
                <div className="form__field">
                  <InputField
                    label="Surname"
                    name="surname"
                    type="text"
                    placeholder="Surname"
                    value={props.values.surname}
                  />
                </div>
                <div className="form__field">
                  <InputField
                    label="Age"
                    name="age"
                    type="number"
                    placeholder="Age"
                    value={props.values.age}
                  />
                </div>
                <div className="form__field">
                  <InputField
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={props.values.email}
                  />
                </div>

                <div className="form__field">
                  <FieldRadioGroup title="Sex">
                    <FieldRadioButton
                      name="sex"
                      id="male"
                      value="male"
                    >Male</FieldRadioButton>
                    <FieldRadioButton
                      name="sex"
                      id="female"
                      value="female"
                    >Female</FieldRadioButton>
                  </FieldRadioGroup>
                </div>

                <SelectField label="Speciality" name="speciality">
                  <option value="" disabled>Select a speciality</option>
                  <option value="designer">Designer</option>
                  <option value="developer">Developer</option>
                  <option value="manager">Manager</option>
                </SelectField>

              </div>
              <div className="form__footer">
                <Button type="submit">Submit</Button>
                { (props.submitCount > 0) && <h4 className="form__message">Форма заполнена</h4>}
              </div>
            </form>
          )}

        </Formik>

      </div>
    </>
  )
};

