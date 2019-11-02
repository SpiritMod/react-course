export const validationForm = (values) => {
  let errors = {};

  const {
    firstName,
    surname,
    age,
    email,
    sex,
    speciality,
  } = values;

  // firstName
  if(!firstName) {
    errors.firstName = 'Required';
  } else if (typeof firstName !== 'string') {
    errors.firstName = 'Type error'
  }

  // surname
  if(!surname) {
    errors.surname = 'Required';
  } else if (typeof surname !== 'string') {
    errors.surname = 'Type error'
  }

  //age
  if (!((age < 60) && (age > 6))) {
    errors.age = 'Age should be more than 6 and less than 60';
  } else if (typeof age !== 'number') {
    errors.age = 'Type error'
  }

  //email
  if (!email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = 'Invalid email address';
  }

  //sex
  if (!sex) {
    errors.sex = 'Required';
  } if (typeof surname !== 'string') {
    errors.sex = 'Type error'
  }

  //speciality
  if (!speciality) {
    errors.speciality = 'Required';
  } else if (typeof speciality !== 'string') {
    errors.speciality = 'Type error'
  }

  return errors;
};
