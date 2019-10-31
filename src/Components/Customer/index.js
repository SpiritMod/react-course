import React from 'react';
import {Formik, Form, Field, useField} from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from "./inputs/myTextInput"
import { MySelect } from "./inputs/mySelect"

const customerSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  jobType: Yup.string()
    .oneOf([
      'designer',
      'developer',
      'manager'
    ], 'invalid')
    .required('Required')

});


export const Customer = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    jobType: ''
  };

  const submitForm = (values) => {
    console.log(values);
  };

  return (
    <section className="form">
      <h2>Customer</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={customerSchema}
        onSubmit={submitForm}
      >
        {({ errors, touched }) => (
          <Form>
            <MyTextInput
              label="firstName"
              name="firstName"
              type="text"
              placeholder="Name"
            />
            <MyTextInput
              label="lastName"
              name="lastName"
              type="text"
              placeholder="lastName"
            />
            <MyTextInput
              label="email"
              name="email"
              type="text"
              placeholder="email"
            />
            <MySelect
              label="Job Type"
              name="jobType"
            >
              <option value="">Select Job</option>
              <option value="designer">Designer</option>
              <option value="developer">Developer</option>
              <option value="manager">Manager</option>
            </MySelect>

            {/*<Field name="firstName" placeholder="firstName"/>
            {errors.firstName && touched.firstName ? (
              <div>{errors.firstName}</div>
            ) : null}
            <Field name="lastName" placeholder="lastName"/>
            {errors.lastName && touched.lastName ? (
              <div>{errors.lastName}</div>
            ) : null}
            <Field name="email" type="email" placeholder="email"/>
            {errors.email && touched.email ? <div>{errors.email}</div> : null}*/}
            <button type="submit">Submit</button>
          </Form>
        )}

      </Formik>
    </section>
  )
};
