import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

import { useSelector } from "react-redux";


import {book} from "../../navigation/book";


export const Student = () => {
  const student = useSelector((state) => state.student);

  const {
    firstName,
    surname,
    age,
    email,
    sex,
    speciality,
    password,
    passwordConfirm
  } = student;

  const studentInfo =
      <>
        <div className="c-student__field"><strong>First Name:</strong>{firstName}</div>
        <div className="c-student__field"><strong>Surname:</strong>{surname}</div>
        <div className="c-student__field"><strong>Age:</strong>{age}</div>
        <div className="c-student__field"><strong>Email:</strong>{email}</div>
        <div className="c-student__field"><strong>Sex:</strong>{sex}</div>
        <div className="c-student__field"><strong>Speciality:</strong>{speciality}</div>
        <div className="c-student__field"><strong>Password:</strong>{password}</div>
        <div className="c-student__field"><strong>Confirm password:</strong>{passwordConfirm}</div>
      </>;

  const studentNotFound = <h4>
    Студент еще не создан,<br/>
    вы можете создать студента по этому <Link to={book.studentRegistration}>адресу</Link>
  </h4>;

  return (
    <div className="c-student">
      <div className="o-container">
        <h2>Student</h2>
        <div className="c-student__content">
          { student ? studentInfo : studentNotFound }
        </div>
      </div>
    </div>
  )
};

