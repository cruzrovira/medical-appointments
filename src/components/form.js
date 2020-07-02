import React, { useRef } from "react";
import { v4 as uuidv4 } from "uuid";

import styled from "styled-components";

const FormStyled = styled.form`
  background: #fff;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.3);
  h2 {
    text-align: center;
    margin-bottom: 10px;
  }
  input[type="text"],
  input[type="date"],
  input[type="time"],
  textarea {
    width: 100%;
    max-width: 100%;
    border: 1px solid purple;
    border-radius: 4px;
    line-height: 3em;
    outline: none;
    margin-bottom: 10px;
    padding-left: 10px;
  }
  input[type="submit"] {
    background: purple;
    color: #fff;
    border: none;
    border-radius: 4px;
    line-height: 3em;
    width: 5em;
    outline: none;
    cursor: pointer;
  }
  input[type="submit"]:active {
    transform: scale(0.9);
  }
`;

const Form = ({ addAppointment }) => {
  let nameRef = useRef();
  let lastNameRef = useRef();
  let dateRef = useRef();
  let hourRef = useRef();
  let symptomsRef = useRef();

  let addform = (event) => {
    event.preventDefault();
    let name = nameRef.current.value;
    let lastName = lastNameRef.current.value;
    let date = dateRef.current.value;
    let hour = hourRef.current.value;
    let symptoms = symptomsRef.current.value;

    // validations
    if (name.trim().length === 0) {
      nameRef.current.setCustomValidity("required item");
      return null;
    } else {
      nameRef.current.setCustomValidity("");
    }

    if (lastName.trim().length === 0) {
      lastNameRef.current.setCustomValidity("required item");
      return null;
    } else {
      lastNameRef.current.setCustomValidity("");
    }

    if (date.trim().length === 0) {
      dateRef.current.setCustomValidity("required item");
      return null;
    } else {
      dateRef.current.setCustomValidity("");
    }

    if (hour.trim().length === 0) {
      hourRef.current.setCustomValidity("required item");
      return null;
    } else {
      hourRef.current.setCustomValidity("");
    }

    let appointment = { id: uuidv4(), name, lastName, date, hour, symptoms };

    addAppointment(appointment);

    nameRef.current.value = "";
    lastNameRef.current.value = "";
    dateRef.current.value = "";
    hourRef.current.value = "";
    symptomsRef.current.value = "";
    nameRef.current.focus();
  };
  return (
    <FormStyled
      onSubmit={(event) => {
        addform(event);
      }}
    >
      <h2>add Appointments</h2>
      <label htmlFor="name">Name*</label>
      <input type="text" id="name" ref={nameRef} />
      <label htmlFor="lastName">last name*</label>
      <input type="text" id="lastName" ref={lastNameRef} />
      <label htmlFor="date">Date*</label>
      <input type="date" id="date" ref={dateRef} />
      <label htmlFor="hour">Hour*</label>
      <input type="time" id="hour" ref={hourRef} />
      <label htmlFor="symptoms">symptoms</label>
      <textarea id="symptoms" ref={symptomsRef} />
      <input type="submit" value="Add" />
    </FormStyled>
  );
};

export default Form;
