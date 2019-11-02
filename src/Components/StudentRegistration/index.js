import React from "react";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";

import "./style.scss";

import { useLocalStorage } from "../../Hooks/useLocalStorage";

import { Button } from "../../Assets/Button";
import { InputField } from "../../Assets/InputField";
import { SelectField } from "../../Assets/SelectField";
import { FieldRadioButton } from "../../Assets/FieldRadioButton";
import { FieldRadioGroup } from "../../Assets/FieldRadioGroup";
import {book} from "../../navigation/book";


export const StudentRegistration = () => {
  const { getLocalStorage, saveLocalStorage } = useLocalStorage('student');
  const history = useHistory();

  const initialValues = {
    firstName: "",
    surname: "",
    age: 0,
    email: "",
    sex: "",
    speciality: ""
  };

  const validateFieldFirstName = (values) => {
    let errors = {};

    if(!values.firstName) {
      errors.firstName = 'Required';
    }

    return errors;
  };

  /*const validateFields = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = 'Required';
    } else if (values.firstName.length > 15) {
      errors.firstName = 'Must be 15 characters or less';
    }

    if (!values.lastName) {
      errors.lastName = 'Required';
    } else if (values.lastName.length > 20) {
      errors.lastName = 'Must be 20 characters or less';
    }

    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    return errors;
  };*/

  const submitForm = (values) => {
    console.log(values);
    saveLocalStorage(values);
    history.push(book.student);
  };


  return (
    <>
      <div className="o-container">
        <h2>Registration</h2>

        <Formik
          initialValues={ getLocalStorage() || initialValues }
          onSubmit={ submitForm }
          validateOnBlur={false}

        >
          {(props) => {
            const { errors, touched, isValidating, resetForm, submitForm } = props;

            return (
              <form className="form__registration" onSubmit={props.handleSubmit}>
                <div className="form__group">
                  <div className="form__field">
                    <InputField
                      id="firstName"
                      label="First Name"
                      name="firstName"
                      type="text"
                      placeholder="First Name"
                      value={ props.values.firstName }
                      error={ props.errors.firstName }
                    />
                  </div>
                  <div className="form__field">
                    <InputField
                      id="surname"
                      label="Surname"
                      name="surname"
                      type="text"
                      placeholder="Surname"
                      value={props.values.surname}
                    />
                  </div>
                  <div className="form__field">
                    <InputField
                      id="age"
                      label="Age"
                      name="age"
                      type="number"
                      placeholder="Age"
                      value={props.values.age}
                    />
                  </div>
                  <div className="form__field">
                    <InputField
                      id="email"
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
                        checked={props.values.sex === 'male' && 'checked'}
                      >Male</FieldRadioButton>
                      <FieldRadioButton
                        name="sex"
                        id="female"
                        value="female"
                        checked={props.values.sex === 'female' && 'checked'}
                      >Female</FieldRadioButton>
                    </FieldRadioGroup>
                  </div>

                  <SelectField label="Speciality" name="speciality" id="speciality">
                    <option value="" disabled>Select a speciality</option>
                    <option value="designer">Designer</option>
                    <option value="developer">Developer</option>
                    <option value="manager">Manager</option>
                  </SelectField>

                </div>
                <div className="form__footer">
                  <Button type="submit">{ getLocalStorage() ? 'Обновить данные' : 'Сохранить данные'}</Button>
                  { (props.submitCount > 0) && <h4 className="form__message">Форма заполнена</h4>}
                </div>
              </form>
            )
          }}
        </Formik>

      </div>
    </>
  )
};

