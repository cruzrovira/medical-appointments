import React from "react";
import styled from "styled-components";

const AppointmentStyled = styled.div`
  background: #fff;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.3);
  margin-bottom: 12px;
  p {
    margin: 0;
  }

  button {
    background: purple;
    color: #fff;
    border: none;
    border-radius: 4px;
    line-height: 3em;
    width: 5em;
    outline: none;
    cursor: pointer;
    margin-top: 10px;
  }
  button:active {
    transform: scale(0.9);
  }
`;

const Appointment = ({
  id,
  name,
  lastName,
  date,
  hour,
  symptoms,
  daleteAppointment,
}) => {
  let daleteAppointmentList = () => {
    daleteAppointment(id);
  };

  return (
    <AppointmentStyled>
      <p>
        <strong>Name: </strong>
        {name}
      </p>
      <p>
        <strong>Last name: </strong>
        {lastName}
      </p>
      <p>
        <strong>Date: </strong>
        {date}
      </p>
      <p>
        <strong>Hour: </strong>
        {hour}
      </p>
      <p>
        <strong>Symptoms: </strong>
        {symptoms}
      </p>
      <button
        onClick={() => {
          daleteAppointmentList();
        }}
      >
        Delete
      </button>
    </AppointmentStyled>
  );
};

export default Appointment;
