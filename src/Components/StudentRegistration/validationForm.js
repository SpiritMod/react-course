import * as Yup from 'yup';

export const validationForm = Yup.object().shape({
  firstName: Yup.string()
    .required('Required'),
  surname: Yup.string()
    .required('Required'),
  age: Yup.number()
    .min(6, 'Too Short!')
    .max(60, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  sex: Yup.string()
    .required('Required'),
  speciality: Yup.string()
    .oneOf([
      'designer',
      'developer',
      'manager'
    ], 'Invalid Speciality')
    .required('Required')
});

