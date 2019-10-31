import React from 'react';
import {Formik, Form, Field, useField} from 'formik';
//import './style.scss';


export const Customer = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: ''
  };

  const submitForm = (values) => {
    console.log(values);
  };

  const validateFieldFirstName = (values) => {
    let errors = {};

    if (!values.firstName) {
      errors.firstName = 'Required'
    }

    return errors;
  };

  const validateFieldLastName = (value) => {
    let error = {};

    if (!value) {
      error = 'Required'
    }

    return error;
  };

  return (
    <section className="form">
      <h2>Customer</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={submitForm}
        validate={validateFieldFirstName}
      >
        {(props) => {
          const { errors, touched, isValidating, resetForm, submitForm } = props;
          console.log(props);

          return (
            <Form>
              <div onClick={ resetForm }>Reset</div>
              <br/>
              <div onClick={submitForm}>submitForm</div>
              <br/>
              <Field type="text" name="firstName" placeholder="Name"/>
              { errors.firstName && touched.firstName && <div>{errors.email}</div> }
              <Field type="text" name="lastName" placeholder="LastName" validate={validateFieldLastName}/>
              { errors.lastName && touched.lastName && <div>{errors.lastName}</div> }
              <Field type="text" name="email" placeholder="Email"/>
              <button type="submit">Submit</button>
            </Form>
          )


        }}

      </Formik>
    </section>
  )
};
