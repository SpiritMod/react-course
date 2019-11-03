import React from "react";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";

import "./style.scss";

import { useSelector, useDispatch } from "react-redux";
import { studentActions } from "../../bus/student/actions";

import { Button } from "../../Assets/Button";
import { InputField } from "../../Assets/InputField";
import { SelectField } from "../../Assets/SelectField";
import { FieldRadioButton } from "../../Assets/FieldRadioButton";
import { FieldRadioGroup } from "../../Assets/FieldRadioGroup";
import { book } from "../../navigation/book";

import { validationForm } from "./validationForm";


export const StudentRegistration = () => {
  const dispatch = useDispatch();
  const student = useSelector((state) => state.student);
  const hasStudent = Object.keys(student).length === 0 && student.constructor === Object;

  const history = useHistory();

  const initialValues = {
    firstName: "",
    surname: "",
    age: 0,
    email: "",
    sex: "",
    speciality: "",
    password: "",
    passwordConfirm: ""
  };

  const submitForm = (values) => {
    setDataStudent(values);
    history.push(book.student);
  };

  const setDataStudent = (data) => {
    dispatch(studentActions.setDataStudent(data));
  };

  return (
    <div className="c-student-form">
      <div className="o-container">
        <h2>Registration</h2>

        <Formik
          initialValues={ !hasStudent ? student : initialValues }
          onSubmit={ submitForm }
          validationSchema={ validationForm }
        >
          {(props) => {
            const { values, errors, handleSubmit } = props;

            return (
              <form className="form__registration" onSubmit={handleSubmit}>
                <div className="form__group">
                  <div className="form__field">
                    <InputField
                      id="firstName"
                      label="First Name"
                      name="firstName"
                      type="text"
                      placeholder="First Name"
                      value={ values.firstName }
                    />
                  </div>
                  <div className="form__field">
                    <InputField
                      id="surname"
                      label="Surname"
                      name="surname"
                      type="text"
                      placeholder="Surname"
                      value={ values.surname }
                    />
                  </div>
                  <div className="form__field">
                    <InputField
                      id="age"
                      label="Age"
                      name="age"
                      type="number"
                      placeholder="Age"
                      value={ values.age }
                    />
                  </div>
                  <div className="form__field">
                    <InputField
                      id="email"
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="Email"
                      value={ values.email }
                    />
                  </div>

                  <div className="form__field">
                    <FieldRadioGroup title="Sex" name="sex" error={ errors.sex }>
                      <FieldRadioButton
                        name="sex"
                        id="male"
                        value="male"
                        checked={ values.sex === 'male' && 'checked' }
                      >Male</FieldRadioButton>
                      <FieldRadioButton
                        name="sex"
                        id="female"
                        value="female"
                        checked={ values.sex === 'female' && 'checked' }
                      >Female</FieldRadioButton>
                    </FieldRadioGroup>
                  </div>

                  <div className="form__field">
                    <SelectField label="Speciality" name="speciality" id="speciality">
                      <option value="" disabled>Select a speciality</option>
                      <option value="designer">Designer</option>
                      <option value="developer">Developer</option>
                      <option value="manager">Manager</option>
                    </SelectField>
                  </div>

                  <div className="form__field">
                    <InputField
                      id="password"
                      label="Password"
                      name="password"
                      type="password"
                      placeholder="Password"
                      autoComplete="autocomplete"
                      value={ values.password }
                    />
                  </div>
                  <div className="form__field">
                    <InputField
                      id="passwordConfirm"
                      label="Confirm password"
                      name="passwordConfirm"
                      type="password"
                      autoComplete="autocomplete"
                      placeholder="Confirm password"
                      value={ values.passwordConfirm }
                    />
                  </div>

                </div>
                <div className="form__footer">
                  <Button type="submit">{ !hasStudent ? 'Обновить данные' : 'Сохранить данные'}</Button>
                </div>
              </form>
            )
          }}
        </Formik>

      </div>
    </div>
  )
};

